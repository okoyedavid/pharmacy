const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
const emailRegex = /\S+@\S+\.\S+/;
const gradeRegex = /^[a-fA-F]{1}$/;

const images = [
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/gentility.jpg?t=2024-10-27T11%3A47%3A15.031Z",
    name: "IGATTA JAMES CHIKAMSO",
    role: "PANS PRESIDENT",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/deborah.jpg?t=2024-10-27T11%3A47%3A57.826Z",
    name: "ORJI DEBORAH CHIMUANYA",
    role: "PANS VICE PRESIDENT",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nkwocha.jpg?t=2024-10-27T11%3A47%3A35.002Z",
    name: "NKWOCHA SUCCESS DABERECHUKWU",
    role: "GENERAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/ebubue.jpg?t=2024-10-27T11%3A52%3A56.046Z",
    name: "OGBOZOR EBUBE EMMANUEL",
    role: "ASSt, GENERAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/onyishi.jpg?t=2024-10-27T11%3A48%3A54.788Z",
    name: "ONYISHI CHARLES NNANYEREUGO",
    role: "FINANCIAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/chisom.jpg?t=2024-10-27T11%3A27%3A38.154Z",
    name: "ABARA CHISOM GABRIEl",
    role: "PUBLIC RELATIONS OFFICER",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/vivian.jpg?t=2024-10-27T11%3A48%3A26.004Z",
    name: "EKOH VIVIAN ONYINYECHUKWU",
    role: "DIRECTOR OF SOCIALS",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/kenneth.jpg?t=2024-10-27T11%3A54%3A19.824Z",
    name: "OBETTA OLUCHUKWU KENNETH",
    role: "ASST. DIRECTOR OF SOCIALS",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nnabchi.jpg",
    name: "NNABCHI CHISOM NNAMDI",
    role: "LIBRARIAN",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/akosa.jpg?t=2024-10-27T11%3A58%3A32.137Z",
    name: "AKOSA STANLEY",
    role: "DIRECTOR OF SPORTS",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/franklyn.jpg?t=2024-10-27T11%3A49%3A35.633Z",
    name: "EDOMOBI CHIDUBEM FRANKLYN",
    role: "ASST. DIRECTOR OF SPORTS",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/jeremiah.jpg?t=2024-10-27T11%3A50%3A07.065Z",
    name: "ONU JEREMIAH CHISOM",
    role: "EDITOR-IN-CHIEF",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/michael.jpg?t=2024-10-27T11%3A50%3A54.951Z",
    name: "ONYEMAECHI MICHAEL ONYEMAECHI",
    role: "TREASURER",
  },
];

const pharmacyLevels = [
  { class: "100lvl", title: "100 level" },
  { class: "200lvl", title: "200 level" },
  { class: "300lvl", title: "300 level" },
  { class: "400lvl", title: "400 level" },
  { class: "500lvl", title: "500 level" },
];

// class might be overkill but i used it in order to learn if your not familiar with it feel free to export normally
class GetConstants {
  constructor(constant) {
    this.constant = constant;
  }

  getRegexConstant() {
    const regexMap = {
      email: emailRegex,
      password: passwordRegex,
      grade: gradeRegex,
    };
    return regexMap[this.constant] || null;
  }

  getLevel() {
    return pharmacyLevels;
  }

  getImages() {
    return images;
  }

  fetchConstant() {
    if (["email", "password", "grade"].includes(this.constant)) {
      return this.getRegexConstant();
    } else if (this.constant === "level") {
      return this.getLevel();
    } else if (this.constant === "images") {
      return this.getImages();
    }
    return null; // or throw an error for unrecognized constants
  }
}

export function fetchConstantValue(value) {
  const constant = new GetConstants(value);
  return constant.fetchConstant();
}
