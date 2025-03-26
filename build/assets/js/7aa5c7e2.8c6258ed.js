"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[938],{7678:e=>{e.exports=JSON.parse('{"permalink":"/base64-encoder-in-python","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2018-09-07-base64-encoder-in-python.md","source":"@site/blog/2018-09-07-base64-encoder-in-python.md","title":"Base64 Encoder in Python","description":"Base64","date":"2018-09-07T00:00:00.000Z","tags":[{"inline":true,"label":"base64","permalink":"/tags/base-64"},{"inline":true,"label":"encoder","permalink":"/tags/encoder"},{"inline":true,"label":"python","permalink":"/tags/python"}],"readingTime":2.445,"hasTruncateMarker":true,"authors":[{"name":"Muhamad Khadaffy","title":"Full-Stack Dev","url":"https://github.com/reighpuy","page":{"permalink":"/authors/khadaffy"},"socials":{"instagram":"https://www.instagram.com/reighpuy","github":"https://github.com/reighpuy"},"imageURL":"https://github.com/reighpuy.png","key":"khadaffy"}],"frontMatter":{"slug":"base64-encoder-in-python","title":"Base64 Encoder in Python","authors":"khadaffy","tags":["base64","encoder","python"]},"unlisted":false,"prevItem":{"title":"Intro","permalink":"/intro"},"nextItem":{"title":"How I Learned Command Line","permalink":"/how-i-learned-command-line"}}')},7813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var a=t(7678),i=t(4848),s=t(8453);const r={slug:"base64-encoder-in-python",title:"Base64 Encoder in Python",authors:"khadaffy",tags:["base64","encoder","python"]},o="What exactly is Base64 Encoding?",d={authorsImageUrls:[void 0]},c=[{value:"Introducing the Base64 Module",id:"introducing-the-base64-module",level:2},{value:"Encoding Data with base64.b64encode()",id:"encoding-data-with-base64b64encode",level:2},{value:"Encoding Binary Files the Python Way",id:"encoding-binary-files-the-python-way",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://marquesfernandes.com/wp-content/uploads/2020/02/base64-wallpaper.jpg",alt:"Base64"})}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("em",{children:"Image by: marquesfernandes.com"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Think of Base64 as a translator. It takes binary data - the raw Os and 1s that computers understand - and converts it into a squence of printable ASCII characters. Why? because some systems are designed to handle text-based data ore reliably than raw binary. Imagine trying to send an image as a series of raw bytes through an email system that expects text! That's where Base64 comes to rescue."}),"\n",(0,i.jsxs)(n.p,{children:["It's important to understand that ",(0,i.jsx)(n.strong,{children:"Base64 is not encryption"}),". It's an encoding scheme, meaning it's designed to make data transmitable and readable in text-based environments, not to hide it securely. Anyone with the right tools can easily decode Base64 back to its original form."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"You might encounter Base64 in various scenarios, such as:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Encoding binary files so they can be included in email messages."}),"\n",(0,i.jsx)(n.li,{children:"Embedding small files (like image or fonts) directly within HTML or CSS."}),"\n",(0,i.jsx)(n.li,{children:"Encoding usernames and password for simple HTTP authentication."}),"\n",(0,i.jsx)(n.li,{children:"Storing binary data within text-based configuration files like JSON or XML."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introducing-the-base64-module",children:"Introducing the Base64 Module"}),"\n",(0,i.jsxs)(n.p,{children:["Python, being the versatile language it is, provides a built-in module called ",(0,i.jsx)(n.code,{children:"base64"})," that makes working with Base64 encoding and decoding a breeze. Let's explore how to use it."]}),"\n",(0,i.jsx)(n.h2,{id:"encoding-data-with-base64b64encode",children:"Encoding Data with base64.b64encode()"}),"\n",(0,i.jsxs)(n.p,{children:["The primary function for encoding in the base64 module is ",(0,i.jsx)(n.code,{children:"b64encode()"}),". It takes a ",(0,i.jsx)(n.code,{children:"bytes-like"})," object as input and returns the base64 encoded data, also as a bytes object. This is a key point: you'll often need to convert your strings to bytes before encoding."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simple Code Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'import base64\r\n\r\noriginal_string = "Hello, Python Base64!"\r\nbyte_data = original_string.encode(\'utf-8\')\r\nbase64_encoded = base64.bs64encode(byte_data)\r\nprint(f"Original string: {original_string}")\r\nprint(f"Base64 encoded (bytes): {base64_encoded})\r\nbase64_string = base64_encoded.decode(\'utf-8\')\r\nprint(f"base64 encoded (string): {base64_string}")\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In this code:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We import the base64 module."}),"\n",(0,i.jsx)(n.li,{children:"We have our original string."}),"\n",(0,i.jsx)(n.li,{children:"We use .encode('utf-8') to convert the string into a sequence of bytes. UTF-8 is a common and recommended encoding for text."}),"\n",(0,i.jsxs)(n.li,{children:["We call ",(0,i.jsx)(n.code,{children:"base64.b64encode()"})," with the byte data. The result ",(0,i.jsx)(n.code,{children:"base64_encoded_bytes"})," is also in bytes format."]}),"\n",(0,i.jsxs)(n.li,{children:["Finally, we use ",(0,i.jsx)(n.code,{children:".decode('utf-8')"})," to convert the encoded bytes back into a regular string, making it easier to read and display."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"encoding-binary-files-the-python-way",children:"Encoding Binary Files the Python Way"}),"\n",(0,i.jsx)(n.p,{children:"What about encoding the contents of a file. like an image or a document? Here's how you can do it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'import base64\r\n\r\ndef encode_file_to_base64(file_path):\r\n    """Encodes the content of a file to a Base64 string."""\r\n    try:\r\n        with open(file_path, \'rb\') as file:\r\n            binary_data = file.read()\r\n            base64_encoded_data = base64.b64encode(binary_data).decode(\'utf-8\')\r\n            return base64_encoded_data\r\n    except FileNotFoundError:\r\n        return f"Error: File not found at {file_path}"\r\n\r\nimage_path = "your_image.jpg"\r\nencoded_image_data = encode_file_to_base64(image_path)\r\n\r\nif isinstance(encoded_image_data, str) and encoded_image_data.starswith("Error"):\r\n    print(encoded_image_data)\r\nelse:\r\n    print(f"Base64 encoded data of {image_ath} (first 200 characters):\\n{encoded_image_data[:200]}...")\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"In this snippet"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["We defined a function ",(0,i.jsx)(n.code,{children:"base64_file_to_base64"})," that takes the file path as input."]}),"\n",(0,i.jsx)(n.li,{children:"We open the file in binary read mode('rb') because we're dealing with raw file data."}),"\n",(0,i.jsx)(n.li,{children:"We read"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);