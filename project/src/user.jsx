const defaultUsers = [
    { id: 1, name: "Atiq", email: "atiq@gmail.com", password: "atiq123" },
    { id: 2, name: "Shafayet", email: "shafayet@gmail.com", password: "shafayet123" },
    { id: 3, name: "Kim", email: "kim@gmail.com", password: "kim123" },
    { id: 4, name: "Tasnim", email: "tasnim@gmail.com", password: "tasnimd123" },
    { id: 5, name: "Abrar", email: "abrar@gmail.com", password: "abrar123" },
    { id: 6, name: "Enan", email: "enan@gmail.com", password: "enan123" },
    { id: 7, name: "Grace", email: "grace@gmail.com", password: "grace123" },
    { id: 8, name: "Hannah", email: "hannah@gmail.com", password: "hannah123" },
    { id: 9, name: "Ian", email: "ian@gmail.com", password: "ian123" },
    { id: 10, name: "Jack", email: "jack@gmail.com", password: "jack123" }
  ];
  
  // Store in localStorage if not already saved
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
  