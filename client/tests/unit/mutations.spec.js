import mutations from "@/store/mutations.js";

describe("VISITORS", () => {
  const state = {
    visitors: {
      isLoading: true,
      data: [
        { first_name: "john", last_name: "doe", email: "johnDoe@gmail.com" }
      ],
      errors: {}
    }
  };

  const visitors = [
    { first_name: "john", last_name: "doe", email: "johnDoe@gmail.com" },
    { first_name: "jane", last_name: "doe", email: "janedoe@gmail.com" },
    { first_name: "foor", last_name: "bar", email: "foo@gmail.com" },
    { first_name: "foo", last_name: "baz", email: "baz@gmail.com" }
  ];

  it("adds a visitor to the state when ADD_VISITORS mutation is executed", () => {
    const visitor = {
      first_name: "jinny",
      last_name: "doe",
      email: "jinnyDoe@gmail.com"
    };

    mutations.ADD_VISITORS(state, visitor);

    expect(state.visitors).toEqual({
      isLoading: false,
      data: [
        { first_name: "john", last_name: "doe", email: "johnDoe@gmail.com" },
        { first_name: "jinny", last_name: "doe", email: "jinnyDoe@gmail.com" }
      ],
      errors: {}
    });
  });

  it("gets all the visitors when GET_VISITORS mutation is executed", () => {
    const newVisitor = {
      first_name: "jane",
      last_name: "doe",
      email: "janeDoe@gmail.com"
    };

    mutations.ADD_VISITORS(state, { newVisitor });

    mutations.GET_VISITORS(state, visitors);

    expect(state.visitors).toEqual({
      isLoading: false,
      data: visitors,
      errors: {}
    });
  });
});

describe("USER", () => {
  const state = {
    auth: {
      user: {
        token: localStorage.getItem("token"),
        id: null,
        email: "",
        full_name: "",
        isAuthenticated: false
      },
      isLoading: true
    }
  };

  it("Loads user details on LOAD_USER mutation", () => {
    const newUser = {
      id: "1110-343-434-565-2323",
      email: "test@gmail.com",
      full_name: "Test VueApp"
    };

    mutations.LOAD_USER(state, newUser);

    const { id, email, full_name } = newUser;

    expect(state.auth).toEqual({
      user: {
        token: localStorage.getItem("token"),
        id,
        email,
        full_name,
        isAuthenticated: true
      },
      isLoading: true
    });
  });

  it("Deletes user details on state on LOGOUT mutation", () => {
    mutations.LOGOUT(state);

    expect(state.auth).toEqual({
      user: {
        id: null,
        email: "",
        full_name: "",
        isAuthenticated: false
      },
      isLoading: true
    });
  });

  it("Deletes user details on state on AUTH_ERROR mutation", () => {
    mutations.AUTH_ERROR(state);

    expect(state.auth).toEqual({
      user: {
        id: null,
        email: "",
        full_name: "",
        isAuthenticated: false
      },
      isLoading: true
    });
  });
});

describe("ALERTS", () => {
  const state = {
    alerts: [
      {
        id: 1111 - 222 - 333 - 444 - 5555,
        alert: "Something",
        alertType: "foo"
      },
      {
        id: 2222 - 333 - 444 - 555 - 6666,
        alert: "Something else",
        alertType: "bar"
      }
    ]
  };

  const alertMsg = {
    id: 3333 - 444 - 555 - 666 - 7777,
    alert: "Something",
    alertType: "foo"
  };

  const id = 1111 - 222 - 333 - 444 - 5555;
  it("adds alert on ADD_ALERT", () => {
    mutations.ADD_ALERT(state, alertMsg);

    expect(state).toEqual({
      alerts: [
        {
          id: 3333 - 444 - 555 - 666 - 7777,
          alert: "Something",
          alertType: "foo"
        },
        {
          id: 1111 - 222 - 333 - 444 - 5555,
          alert: "Something",
          alertType: "foo"
        },
        {
          id: 2222 - 333 - 444 - 555 - 6666,
          alert: "Something else",
          alertType: "bar"
        }
      ]
    });
  });

  it("removes alert on REMOVE_ALERT", () => {
    mutations.REMOVE_ALERT(state, id);

    expect(state).toEqual({
      alerts: [
        {
          id: 3333 - 444 - 555 - 666 - 7777,
          alert: "Something",
          alertType: "foo"
        },
        {
          id: 2222 - 333 - 444 - 555 - 6666,
          alert: "Something else",
          alertType: "bar"
        }
      ]
    });
  });
});
