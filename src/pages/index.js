//import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as monaco from "monaco-editor";
import '../css/code.css';


class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {code: '<p></p>'};
    this.changeCode = this.changeCode.bind(this);
  }

  render() {
    return (
      <Layout>
        <SEO title="Ton premier code !" />
        <div className="page-content">
          <h1>Ton premier code en MMI !</h1>
          <br />
          <div className="columns">
            <div id="editor" className="column code-editor"></div>
            <div id="render" className="column render-editor" dangerouslySetInnerHTML={{__html: this.state.code}}/>
          </div>
          <button onClick={this.changeCode}>Mettre à jour</button>
        </div>
      </Layout>
    );
  }

  changeCode() {
    let valeur = window.editor.getValue();
    this.setState({code: valeur});
  }

  componentDidMount() {
    window.editor = monaco.editor.create(document.getElementById('editor'), {
      value: [
        '<html>',
        '\t<head>',
        '\t\t<title>Bonjour le monde !</title>',
        '\t</head>',
        '\t<body>',
        '\t\t<h1>Bonjour les (futurs) MMI :)</h1>',
        '\t</body>',
        '</html>'
      ].join('\n'),
      language: 'html'
    });
  }
}

export default Accueil;
