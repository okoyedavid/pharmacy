const users = [
  {
    id: "0a5d",
    status: "student",
    userInfo: {
      name: "Clinton Egemba",
      password: "Pharmacy7&",
      email: "egembaclinton@gmail.com",
    },

    schoolInfo: {
      level: "500",
      carryOvers: {
        subjects: ["cognosy", "microbiology", "ens"],
      },
      AdmissionYear: 2020,
      currentGP: 4.8,
    },
  },
  {
    id: "0a77d",
    status: "Admin",
    userInfo: {
      name: "igatta james",
      password: "Pharmacy7&",
      email: "egembaclinton@gmail.com",
      profile_image: "",
    },

    schoolInfo: {
      level: "500",
      carryOvers: {
        subjects: [],
      },
      AdmissionYear: 2020,
      currentGP: 5.0,
    },
  },
  {
    id: "0a99d",
    status: "student",
    userInfo: {
      name: "Blaise pascal",
      password: "Pharmacy7&",
      email: "egembaclinton@gmail.com",
      profile_image: "",
    },

    schoolInfo: {
      level: "500",
      carryOvers: {
        subjects: ["cognosy", "microbiology", "ens"],
      },
      AdmissionYear: 2020,
      currentGP: 4.5,
    },
  },

  {
    id: "0a90d",
    status: "student",
    userInfo: {
      name: "Blaise pascal",
      password: "Pharmacy7&",
      email: "egembaclinton@gmail.com",
      profile_image: "",
    },

    schoolInfo: {
      level: "500",
      carryOvers: {
        subjects: ["cognosy", "microbiology", "ens"],
      },
      AdmissionYear: 2020,
      currentGP: 4.5,
    },
  },
];

export default function handler(req, res) {
  const allowedOrigins = [
    "https://pharm-six.vercel.app/", // Your deployed Vercel site
    "http://localhost:5173", // Your local dev environment
  ];

  const origin = req.headers.origin; // Get the origin of the request

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
    return;
  }

  // Safely handle ID extraction
  const id = req.query?.id || null;

  switch (req.method) {
    case "GET":
      if (id) {
        const user = users.find((user) => user.id === id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(200).json({ dataBase: users });
      }
      break;

    case "POST":
      users.push(req.body);
      res.status(201).json(req.body);
      break;

    case "PUT":
      if (id) {
        const updatedUserData = req.body;
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex > -1) {
          users[userIndex] = {
            ...users[userIndex],
            schoolInfo: updatedUserData,
          };
          res.status(200).json(users[userIndex]);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "ID is required" });
      }
      break;

    case "PATCH":
      if (id) {
        const patchData = req.body; // This should contain the new group data
        const patchUserIndex = users.findIndex((user) => user.id === id);

        if (patchUserIndex > -1) {
          users[patchUserIndex] = {
            ...users[patchUserIndex],
            patchData,
          };

          res.status(200).json(users[patchUserIndex]);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "ID is required" });
      }
      break;

    case "DELETE":
      if (id) {
        const groupID = req.body;
        const delIndex = users.findIndex((user) => user.id === id);

        if (delIndex > -1) {
          users[delIndex] = {
            ...users[delIndex],
            groups: users[delIndex].groups.filter(
              (group) => group.id !== groupID
            ),
          };

          res.status(200).json(users[delIndex]);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "ID is required" });
      }
      break;

    default:
      res.setHeader("Allow", [
        "OPTIONS",
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
      ]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
