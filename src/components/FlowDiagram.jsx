import { useState } from 'react'

const AGENT = { fill: '#D4EDE1', stroke: '#2D6A4F', text: '#1B4332', sub: '#2D6A4F' }
const HUMAN = { fill: '#FEF3C7', stroke: '#D97706', text: '#78350F', sub: '#92400E' }
const LINE = 'rgba(255,255,255,0.5)'
const HINT = 'rgba(255,255,255,0.8)'
const FONT = 'Bitter, Georgia, serif'
const W = 110
const H = 68

// Row 1 y=70, Row 2 y=230 — step labels sit ABOVE each box at y-14
// This keeps labels clear of connector lines, which run through the inter-row gap
const steps = [
  { id: 'intake',   type: 'agent', label: 'RFP intake',    sub: ['Parse & extract', 'requirements'],  step: 'Step 1', x: 20,  y: 70,  tooltip: 'Agents parse the uploaded RFP and extract all key requirements automatically.' },
  { id: 'scoring',  type: 'agent', label: 'Scoring',       sub: ['Compare RFP to', 'knowledge base'], step: 'Step 2', x: 148, y: 70,  tooltip: 'Agents compare the RFP against your knowledge base and assign a fit score.' },
  { id: 'gonogo',   type: 'human', label: 'Human review',  sub: ['Go / no-go', 'decision'],           step: 'Step 3', x: 278, y: 70,  tooltip: 'Your team reviews the fit score and decides whether to respond.' },
  { id: 'template', type: 'agent', label: 'Template',      sub: ['Generate structured', 'document'],  step: 'Step 4', x: 418, y: 70,  tooltip: 'Agents generate a structured document template tailored to the RFP.' },
  { id: 'draft',    type: 'agent', label: 'First draft',   sub: ['Populate from', 'knowledge base'],  step: 'Step 5', x: 546, y: 70,  tooltip: 'Agents populate the template with content pulled from your past proposals.' },
  { id: 'flag',     type: 'agent', label: 'Flag sections', sub: ['Tag low-confidence', 'areas'],      step: 'Step 6', x: 418, y: 230, tooltip: 'Agents tag any low-confidence sections and notify the team for review.' },
  { id: 'final',    type: 'human', label: 'Human review',  sub: ['Final edit', '& submit'],           step: 'Step 7', x: 278, y: 230, tooltip: 'Your team reviews the full draft, makes final edits, and submits.' },
]

function SvgBox({ step, isActive, onToggle }) {
  const c = step.type === 'agent' ? AGENT : HUMAN
  const cx = step.x + W / 2

  return (
    <g onClick={() => onToggle(step.id)} style={{ cursor: 'pointer' }}>
      {/* Step label above box */}
      <text x={cx} y={step.y - 8} textAnchor="middle" fill={HINT}
        style={{ fontFamily: FONT, fontSize: 10 }}>
        {step.step}
      </text>

      <rect x={step.x} y={step.y} width={W} height={H} rx={8}
        fill={c.fill}
        stroke={isActive ? c.text : c.stroke}
        strokeWidth={isActive ? 2 : 1}
      />
      <text x={cx} y={step.y + 23} textAnchor="middle" fill={c.text}
        style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600 }}>
        {step.label}
      </text>
      {step.sub.map((line, i) => (
        <text key={i} x={cx} y={step.y + 41 + i * 15} textAnchor="middle" fill={c.sub}
          style={{ fontFamily: FONT, fontSize: 10 }}>
          {line}
        </text>
      ))}
    </g>
  )
}

// Row 1 center y = 70+34 = 104
// Row 1 bottom  = 70+68 = 138
// Elbow midpoint y = 184  ((138+230)/2 = 184, safely below row 1 step labels at y-8=62)
// Row 2 step labels above y = 230-8 = 222  (elbow midpoint 184 < 222 — no overlap)
// Row 2 center y = 230+34 = 264

function DesktopDiagram({ activeId, onToggle }) {
  const active = steps.find(s => s.id === activeId)

  return (
    <div className="hidden sm:block">
      <svg width="100%" viewBox="0 0 680 322" aria-label="AlignRFP agent workflow diagram">
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1.5 L8 5 L2 8.5" fill="none" stroke={LINE}
              strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Row 1 connectors at center y=104 */}
        {[
          [130, 104, 148, 104],
          [258, 104, 278, 104],
          [388, 104, 418, 104],
          [528, 104, 546, 104],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={LINE} strokeWidth={1.5} markerEnd="url(#flow-arrow)" />
        ))}

        {/* Elbow: bottom-center of draft (601,138) → midpoint (601,184) → above flag (473,184) → flag top (473,230) */}
        <path d="M601,138 L601,184 L473,184 L473,230"
          fill="none" stroke={LINE} strokeWidth={1.5} markerEnd="url(#flow-arrow)" />

        {/* Row 2: flag → final, right-to-left at center y=264 */}
        <line x1={418} y1={264} x2={390} y2={264}
          stroke={LINE} strokeWidth={1.5} markerEnd="url(#flow-arrow)" />

        {steps.map(s => (
          <SvgBox key={s.id} step={s} isActive={activeId === s.id} onToggle={onToggle} />
        ))}

        <text x={340} y={314} textAnchor="middle" fill={HINT}
          style={{ fontFamily: FONT, fontSize: 10 }}>
          Steps 3 &amp; 7 are human touchpoints · click any step for details
        </text>
      </svg>

      {active && (
        <div className="mt-2 px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-[14px] text-stone-200 leading-relaxed">
          <span className="font-semibold text-white">{active.label}</span>
          {': '}
          {active.tooltip}
        </div>
      )}
    </div>
  )
}

function MobileList({ activeId, onToggle }) {
  return (
    <div className="sm:hidden">
      {steps.map((step, i) => {
        const isAgent = step.type === 'agent'
        const isActive = activeId === step.id
        return (
          <div key={step.id}>
            <button
              onClick={() => onToggle(step.id)}
              className={`w-full text-left rounded-lg px-4 py-3.5 border transition-colors duration-150 ${
                isAgent
                  ? 'bg-[#D4EDE1] border-[#2D6A4F]/40'
                  : 'bg-amber-100 border-amber-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wide">
                    {step.step}
                  </span>
                  <p className={`font-semibold mt-0.5 ${isAgent ? 'text-[#1B4332]' : 'text-amber-900'}`}>
                    {step.label}
                  </p>
                  <p className={`text-sm mt-0.5 ${isAgent ? 'text-[#2D6A4F]' : 'text-amber-800'}`}>
                    {step.sub.join(' ')}
                  </p>
                </div>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 mt-1 ${
                  isAgent ? 'bg-[#2D6A4F]/15 text-[#1B4332]' : 'bg-amber-200 text-amber-900'
                }`}>
                  {isAgent ? 'Agent' : 'Human'}
                </span>
              </div>
              {isActive && (
                <p className={`text-sm leading-relaxed mt-3 pt-3 border-t ${
                  isAgent ? 'border-[#2D6A4F]/20 text-[#1B4332]' : 'border-amber-300 text-amber-900'
                }`}>
                  {step.tooltip}
                </p>
              )}
            </button>

            {i < steps.length - 1 && (
              <div className="flex justify-center py-0.5">
                <div className="w-px h-4 bg-white/25" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function FlowDiagram() {
  const [activeId, setActiveId] = useState(null)
  const toggle = (id) => setActiveId(prev => prev === id ? null : id)

  return (
    <div className="rounded-xl bg-stone-900 p-6 sm:p-8">
      <div className="flex gap-5 mb-6 text-[13px] text-stone-300">
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-[#D4EDE1] border border-[#2D6A4F]/40" />
          Agent automated
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-amber-100 border border-amber-300/60" />
          Human review
        </span>
      </div>
      <MobileList activeId={activeId} onToggle={toggle} />
      <DesktopDiagram activeId={activeId} onToggle={toggle} />
    </div>
  )
}
