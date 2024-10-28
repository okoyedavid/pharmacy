const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
const emailRegex = /\S+@\S+\.\S+/;

const images = [
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/chisom.jpg?t=2024-10-27T11%3A27%3A38.154Z",
    name: "ABARA CHISOM GABRIEl",
    role: "PUBLIC RELATIONS OFFICER",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nkwocha.jpg?t=2024-10-27T11%3A47%3A35.002Z",
    name: "NKWOCHA SUCCESS DABERECHUKWU",
    role: "GENERAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/deborah.jpg?t=2024-10-27T11%3A47%3A57.826Z",
    name: "ORJI DEBORAH CHIMUANYA",
    role: "PANS VICE PRESIDENT",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/onyishi.jpg?t=2024-10-27T11%3A48%3A54.788Z",
    name: "ONYISHI CHARLES NNANYEREUGO",
    role: "FINANCIAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/franklyn.jpg?t=2024-10-27T11%3A49%3A35.633Z",
    name: "EDOMOBI CHIDUBEM FRANKLYN",
    role: "ASST. DIRECTOR OF SPORTS",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/gentility.jpg?t=2024-10-27T11%3A47%3A15.031Z",
    name: "IGATTA JAMES CHIKAMSO",
    role: "PANS PRESIDENT",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/ebubue.jpg?t=2024-10-27T11%3A52%3A56.046Z",
    name: "OGBOZOR EBUBE EMMANUEL",
    role: "ASSISTANT GENERAL SECRETARY",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/kenneth.jpg?t=2024-10-27T11%3A54%3A19.824Z",
    name: "OBETTA OLUCHUKWU KENNETH",
    role: "ASSISTANT DIRECTOR OF SOCIALS",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/michael.jpg?t=2024-10-27T11%3A50%3A54.951Z",
    name: "ONYEMAECHI MICHAEL ONYEMAECHI",
    role: "TREASURER",
  },

  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nnabchi.jpg",
    name: "NNABCHI CHISOM NNAMDI",
    role: "LIBRARIAN",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/vivian.jpg?t=2024-10-27T11%3A48%3A26.004Z",
    name: "EKOH VIVIAN ONYINYECHUKWU",
    role: "DIRECTOR OF SOCIALS",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/akosa.jpg?t=2024-10-27T11%3A58%3A32.137Z",
    name: "AKOSA STANLEY",
    role: "DIRECTOR OF SPORTS",
  },
  {
    url: "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/jeremiah.jpg?t=2024-10-27T11%3A50%3A07.065Z",
    name: "ONU JEREMIAH CHISOM",
    role: "EDITOR-IN-CHIEF",
  },
];

export { passwordRegex, emailRegex, images };
