const public_Posts = "http://localhost:3002/Public/";
const users_Post = "http://localhost:3002/users";
const products_Area = "http://localhost:3002/Products/";
export class Posts_Tools {
  post_The_Data = async (the_Data) => {
    try {
      const response = await fetch(users_Post, the_Data);
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Posts = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(name, email, password) {
    this.data_For_Posts.body = JSON.stringify({
      info: {
        name,
        email,
        password,
      },
      posts: [],
      products: [],
      tags: [],
    });
  }
}

export class Public_Posts_Tools {
  post_The_Data = async (the_Data) => {
    try {
      const response = await fetch(public_Posts, the_Data);
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Posts = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(user, post) {
    this.data_For_Posts.body = JSON.stringify({
      user,
      post,
      comments: [],
    });
  }
}

export class Products_Posts_Tools {
  post_The_Data = async (the_Data) => {
    try {
      const response = await fetch(products_Area, the_Data);
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Posts = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(Product) {
    this.data_For_Posts.body = JSON.stringify(Product);
  }
}

export class Put_Tools {
  put_The_Data = async (id, the_Data) => {
    try {
      const response = await fetch(
        "http://localhost:3002/users/" + id,
        the_Data
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Puts = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(Update) {
    this.data_For_Puts.body = JSON.stringify(Update);
  }
}

export class ProductPut_Tools {
  put_The_Data = async (id, the_Data) => {
    try {
      const response = await fetch(
        products_Area + id,
        the_Data
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Puts = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(Update) {
    this.data_For_Puts.body = JSON.stringify(Update);
  }
}


export class Delete_Tools {
  delete_The_Data = async (id) => {
    try {
      const response = await fetch(products_Area + id, this.data_For_Puts);
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Puts = {
    method: "delete",
  };
}

export class Delete_ToolsPosts {
  delete_The_Data = async (id) => {
    try {
      const response = await fetch(public_Posts + id, this.data_For_Puts);
      const data = await response.json();
      return data;
    } catch (error) {
      return false;
    }
  };

  data_For_Puts = {
    method: "delete",
  };
}


