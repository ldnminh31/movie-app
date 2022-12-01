import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;

class AccountService {
  constructor() {
    this.baseUrl = `${url}/api/account`;
    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  async signIn(account) {
    return (await this.api.post(`${this.baseUrl}/signin`, account)).data;
  }

  async signUp(account) {
    return (await this.api.post(`${this.baseUrl}/signup`, account)).data;
  }
}

export default AccountService;
