import React from 'react';
import emojiRegex from 'emoji-regex';

export default function NoEmoji({ children }) {

  const removeEmojis = (node) => {
    const regex = emojiRegex();

    if (typeof node === 'string') {
      return node.replace(regex, '');
    }

    if (Array.isArray(node)) {
      return React.Children.map(node, removeEmojis);
    }

    if (React.isValidElement(node) && node.props.children) {
      return React.cloneElement(node, {
        ...node.props,
        children: removeEmojis(node.props.children),
      });
    }

    return node;
  };

  return <>{removeEmojis(children)}</>;
}