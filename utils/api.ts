export const api = {
  hostname: "https://api.stackexchange.com",
  version: "2.3",
  pagesize: 20,
  order: "desc",
  sort: "activity",
  async fetchQuestion(page: number, tag: string) {
    const res = await fetch(
      `${this.hostname}/${this.version}/questions?page=${page}&pagesize=${this.pagesize}&order=${this.order}&sort=${this.sort}&tagged=${tag}&site=stackoverflow`
    );
    return await res.json();
  },
};
