type Mail = {
  user: string;
  pass: string;
  host: string;
  port?: number;
  secure?: boolean;
  to: string | string[];
  bcc?: string | string[];
  cc?: string | string[];
  subject: string;
  html: string;
};

export { Mail };
