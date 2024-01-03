// https://servicodados.ibge.gov.br/api/v1/localidades/distritos
import axios from "axios";
import { requestApiTest } from "..";

const TestService = () => {
  const test = async () => {
    return await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
    );
  };

  return {
    test,
  };
};

requestApiTest("get status 200 for api request", TestService().test());
