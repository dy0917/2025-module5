let accessToken = "accessToken";

//sample of axiosCallConfig
// {
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   }

async function call(axiosCallConfig) {
  const count = 0;
  const callAPI = async () => {
    if (count < 2) {
      const axios = getAccessAxios();
      try {
        await axios(axiosCallConfig);
      } catch (e) {
        const axios = getRefreshAxios();
        await axios();
        await callAPI();
      }
    } else {
      //redirect user to login
    }
  };
  callAPI();
}

function getAccessAxios() {}

function getRefreshAxios() {} //update accessToken
