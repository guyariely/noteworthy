
import React from 'react';
import './styles/styles.scss';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import TextEditor from './components/TextEditor';
import "draft-js/dist/Draft.css";
import 'draft-js-checkable-list-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';

ReactDOM.render(<TextEditor />, document.getElementById('root'));

