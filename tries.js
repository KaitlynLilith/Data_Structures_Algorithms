/**
 * Tries
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dictionary, sentence) {
  const newSentence = sentence.split(" ");
  const newerSentence = [];

  class Node {
    constructor(data) {
      this.data = data;
      this.isEndOfWord = false;
      this.children = {};
      this.parent = null;
    }
  }

  class Trie {
    constructor() {
      this.root = new Node(null);
    }

    insert(word) {
      let node = this.root;
      for (var i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
          node.children[word[i]] = new Node(word[i]);
          node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        if (i === word.length - 1) {
          node.isEndOfWord = true;
        }
      }
    }

    search(word) {
      let node = this.root;
      const newWord = [];
      for (const char of word) {
        if (node.children[char]) {
          newWord.push(char);
          node = node.children[char];
        } else {
          return null;
        }
        if (node.isEndOfWord) {
          return newWord.join("");
        }
      }
      return null;
    }
  }

  const dictionaryTrie = new Trie();

  dictionary.forEach((root) => {
    dictionaryTrie.insert(root);
  });

  newSentence.forEach((word) => {
    const dictionaryWord = dictionaryTrie.search(word);
    if (dictionaryWord) {
      newerSentence.push(dictionaryWord);
    } else {
      newerSentence.push(word);
    }
  });

  return newerSentence.join(" ");
}

console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
console.log(
  replaceWords(
    ["ti", "co", "ho", "da"],
    "it's time to come home when it's dark"
  )
);
console.log(
  replaceWords(
    ["as"],
    "i asked you to order assorted asterisks as soon as possible"
  )
);
console.log(
  replaceWords(["re", "de", "be"], "i regret deciding to be a repo dealer")
);

console.log(
  replaceWords(
    ["a", "aa", "aaa", "aaaa"],
    "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
  )
);
