import { useState } from 'react'
import { harborProfile, PROFILE_UI } from './harbor_profile'

export function HarborContactInfo({ showIntro = true, showEmpty = false }: { showIntro?: boolean; showEmpty?: boolean }) {
  const email = harborProfile.email.trim()
  const [message, setMessage] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setMessage(PROFILE_UI.copySuccess)
    } catch {
      setMessage(PROFILE_UI.copyFailure)
    }
  }

  return (
    <>
      {showIntro && <p>{harborProfile.biography.trim() || PROFILE_UI.placeholder}</p>}
      {email && <div className="harbor-contact-info">
        <span>{email}</span>
        <button type="button" onClick={copyEmail}>{PROFILE_UI.copyEmail}</button>
        <span role="status">{message}</span>
      </div>}
      {!email && showEmpty && <p>邮箱 · {PROFILE_UI.placeholder}</p>}
    </>
  )
}
