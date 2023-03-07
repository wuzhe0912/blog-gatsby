// use promise
const checkScorePromise = () => {
  return new Promise((resolve, reject) => {
    const score = Math.round(Math.random() * 100);
    setTimeout(() => {
      if (score >= 60) {
        resolve(score);
      } else {
        reject(score);
      }
    }, 1000);
  });
};

checkScorePromise()
  .then(result => console.log('Promise', `分數及格: ${result}`))
  .catch(error => console.log('Promise', `分數不及格: ${error}`));

// use async/await
const checkScoreAsync = async () => {
  const randomScore = Math.round(Math.random() * 100);
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomScore >= 60) {
          resolve(randomScore);
        } else {
          reject('不及格');
        }
      }, 1000);
    });
    console.log('async/await', randomScore);
  } catch (error) {
    console.log('async/await', error);
  }
};

checkScoreAsync();
