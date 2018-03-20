
class userApi {  
    static getProfile() {
      return fetch('https://trello-attachments.s3.amazonaws.com/5aa8aab7e01b8b098929e72d/5aa8ab4228ee9068b9edc8cf/09fcac76a37de59c56720908eb66d2ce/candidate.json')
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}

export default userApi; 