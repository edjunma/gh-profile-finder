class GitHub {
  constructor() {
    this.client_id = "7429742afb4022f43a82";
    this.client_secret = "a484f677c86652a50478ea2d846748a9b9741b07";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api/github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
      profile
    };
  }
}
