'use strict';

import React from 'react';
import Main from '../../assets/react/main'


// ごく簡単なViewを作成
class ViewController {
  first(req, res) {
    res.view('react');
  }
}

module.exports = new ViewController;
