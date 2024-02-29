class NodemailerError extends Error {
  constructor(
    public message: string,
    public response: string,
    public responseCode: number,
  ) {
    super(message);
    this.response = response;
    this.responseCode = responseCode;
  }
}

export { NodemailerError };
