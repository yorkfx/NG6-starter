const ofersService = ($http) => {

  const obtener = () => {
    const url = "http://13.84.167.160:5000/api/v1/ofertas";
    return $http.get(url).then(response => {
      response
    })
  };
  return {
    obtener
  }
};

export default ofersService;
