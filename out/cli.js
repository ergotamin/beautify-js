#!/usr/bin/node
const beautify = require('js-beautify').js_beautify;
const argv = require('process').argv;
const fs = require('fs');

const options = {
  indent_size: 4,
  indent_char: ' ',
  indent_with_tabs: false,
  eol: '\n',
  end_with_newline: true,
  indent_level: 0,
  preserve_newlines: true,
  max_preserve_newlines: 10,
  space_in_paren: false,
  space_in_empty_paren: false,
  jslint_happy: false,
  space_after_anon_function: false,
  brace_style: 'collapse',
  unindent_chained_methods: false,
  break_chained_methods: false,
  keep_array_indentation: false,
  unescape_strings: false,
  wrap_line_length: 140,
  e4x: false,
  comma_first: false,
  operator_position: 'before-newline',
};

if (argv.length >= 3) {
  const files = [];
  argv.forEach((arg, idx) => {
    if (idx >= 2) files.push(arg.toString());
  });
  files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      else console.log(beautify(data, options));
    });
  });
}
