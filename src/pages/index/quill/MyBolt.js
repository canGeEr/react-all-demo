import Quill from 'quill';

const FormatLink = Quill.import('formats/link');

class MyBolt extends FormatLink {
  static create(value) {
    const node = super.create();
    node.setAttribute('href', value);
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(node) {
    return node.getAttribute('href');
  }
}

MyBolt.boltName = 'MyBolt';
MyBolt.tagName = 'a';

export default MyBolt;
