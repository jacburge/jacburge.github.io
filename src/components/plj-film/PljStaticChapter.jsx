import { pljForwardBlock, pljPurposeBlock } from '../../data/embaPljScenes';

export function PljStaticChapter({ variant }) {
  if (variant === 'purpose') {
    return (
      <aside className="plj-static" aria-label="Purpose and why">
        <p className="plj-static__lead">{pljPurposeBlock.purposeLead}</p>
        <p className="plj-static__body">{pljPurposeBlock.purpose}</p>
        <p className="plj-static__lead plj-static__lead--gap">{pljPurposeBlock.whyLead}</p>
        <p className="plj-static__body">{pljPurposeBlock.why}</p>
      </aside>
    );
  }

  if (variant === 'forward') {
    return (
      <aside className="plj-static" aria-label="Carrying forward">
        <p className="plj-static__lead">{pljForwardBlock.lead}</p>
        <ul className="plj-static__list">
          {pljForwardBlock.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </aside>
    );
  }

  return null;
}
