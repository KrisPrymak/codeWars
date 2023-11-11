const isAnagram = (test, original) => {
  function preparing (word) {
    return word.toLowerCase().split('').sort().join()
  }
  return preparing(test) === preparing(original)
};

//являются ли слова анаграммой друг друга