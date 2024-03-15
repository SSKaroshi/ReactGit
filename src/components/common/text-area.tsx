
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Col, Typography } from 'antd';
import '../../themes/default/css/global.scss';

const { Text } = Typography;

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'align', 'link', 'image'
];

interface CustomTextAreaProps {
  value?: string;
  onChange: (value: string) => void;
  lg: number;
  label?: string;
}

const CommonTextArea: React.FC<CustomTextAreaProps> = ({ value, onChange, lg, label }) => {
  const [editorHtml, setEditorHtml] = useState(value || '');

  const handleEditorChange = (html: string) => {
    const plainText = html.replace(/<\/?[^>]+(>|$)/g, "");
    setEditorHtml(html);
    onChange(plainText);
  };
  

  return (
    <Col className="gutter-row common-textarea-layout" xs={24} sm={24} md={24} lg={lg}>
      <Typography className='Typo-header'>{label}</Typography>
      Description
      <ReactQuill
        className='common-textarea'
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
      />
      <Text type="secondary"></Text>
    </Col>
  );
};

export default CommonTextArea;


