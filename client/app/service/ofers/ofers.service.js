const offersService = ($http) => {
  "ngInject";
  const get = () => {
    const url = "http://13.84.167.160:5000/api/v1/ofertas";
    return $http.get(url);
  };

  const post = () => {
    const url = "http://13.84.167.160:5000/api/v1/oferta";
    return $http.post(url);
  };

  return {
    get, post
  }
};

export default offersService;
