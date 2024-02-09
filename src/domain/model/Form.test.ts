import { ErrorMap } from "../../constants/ErrorMap";
import { ServerError } from "../../error/ServerError";
import { Form } from "./Form";

describe("Form", () => {
  let form: Form;

  beforeEach(() => {
    form = new Form();
  });

  describe("getUrl", () => {
    it("should return the URL from process.env.FORM_URL when it is a valid URL", () => {
      process.env.FORM_URL = "http://example.com";

      const url = form.getUrl();

      expect(url).toBe("http://example.com/");
    });

    it("should throw a ServerError when process.env.FORM_URL is not defined", () => {
      delete process.env.FORM_URL;

      expect(() => form.getUrl()).toThrow(ServerError);
      expect(() => form.getUrl()).toThrow(ErrorMap.FORM_URL_UNDEFINED.message);
    });

    it("should throw a ServerError when process.env.FORM_URL is not a valid URL", () => {
      process.env.FORM_URL = "not a valid URL";

      expect(() => form.getUrl()).toThrow(ServerError);
      expect(() => form.getUrl()).toThrow(ErrorMap.FORM_URL_UNDEFINED.message);
    });
  });
});
