const config = {
  locales: ['es'],
  translations: {
    fr: {
      "Auth.form.email.label": "test",
      Users: "Utilisateurs",
      City: "CITY (FRENCH)",
      // Customize the label of the Content Manager table.
      Id: "ID french",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
