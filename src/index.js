
import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './components/TextEditor';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import "draft-js/dist/Draft.css";
import 'draft-js-checkable-list-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';

ReactDOM.render(<TextEditor />, document.getElementById('root'));

