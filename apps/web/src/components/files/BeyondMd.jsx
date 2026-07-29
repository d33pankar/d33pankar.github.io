import React from 'react';
import CodeView from '@/components/editor/CodeView.jsx';
import { C, MdH1, MdH2, MdItalic } from '@/components/editor/tokens.jsx';
import { cv, FILES } from '@/data/cv.js';

const file = FILES.find((f) => f.id === 'beyond');

export default function BeyondMd() {
  const { beyond } = cv;
  const { trekking } = beyond;

  return (
    <CodeView
      id="beyond"
      file={file}
      footer={`${trekking.completed.length} treks logged · markdown · off the clock`}
    >
      <MdH1># Beyond work</MdH1>
      <></>
      <span>
        {'> '}
        <MdItalic>{beyond.intro}</MdItalic>
      </span>
      <></>
      <MdH2>## After hours</MdH2>
      <></>
      {beyond.notes.map((n, i) => (
        <span key={`b-${i}`}>- {n}</span>
      ))}
      <></>
      <MdH2>## In the mountains</MdH2>
      <></>
      <span>
        {'> '}
        <MdItalic>{trekking.blurb}</MdItalic>
      </span>
      <></>
      <MdH2>### Completed treks</MdH2>
      <></>
      {trekking.completed.map((t, i) => (
        <span key={`t-${i}`}>- [x] {t}</span>
      ))}
      <></>
      <MdH2>### Adventure milestones</MdH2>
      <></>
      {trekking.milestones.map((m, i) => (
        <span key={`m-${i}`}>- {m}</span>
      ))}
      <></>
      <MdH2>### On the bucket list</MdH2>
      <></>
      {trekking.bucketList.map((b, i) => (
        <span key={`k-${i}`}>- [ ] {b}</span>
      ))}
      <></>
      <C>{'<!-- ' + trekking.closing + ' -->'}</C>
    </CodeView>
  );
}
