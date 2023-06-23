class slhttp {
    get = (url) => {
      return new Promise(function (resolve, reject) {
        fetch(url)
          .then(res => {
            if(res.status >= 200 && res.status <300) {
              return res.json()
            }
            throw new Error(res.status + " " + res.statusText);
          })        
          .then(data => resolve(data))
          .catch((err) => reject(err));
      })
    }
 
    post = (url, data) =>{
      return new Promise( (resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'applicaton/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status == 200 && res.status == 201) {
              return res.json()
            }
            throw new Error(res.status + " " + res.statusText);
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
      })
    } 

    put = (url, data) => {
      return new Promise( (resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'applicaton/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status == 200 && res.status == 201) {
              return res.json()
            }
            throw new Error(res.status + " " + res.statusText);
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
      })
    }

    delete = (url) => {
      return new Promise(function (resolve, reject) {
        fetch(url)
          .then(res => {
            if(res.status >= 200 && res.status <300) {
              return res.json()
            }
            throw new Error(res.status + " " + res.statusText);
          })
      })
    }
  }