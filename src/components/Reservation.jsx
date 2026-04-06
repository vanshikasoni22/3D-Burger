import { useState } from 'react';
import './Reservation.css';

const timeSlots = ['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM'];

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="reservation">
      <div className="reservation__inner">

        {/* Left — Info */}
        <div className="reservation__info">
          <span className="section-label">Book a Table</span>
          <div className="divider" />
          <h2 className="reservation__title">
            Reserve Your <br />
            <span className="gold-gradient-text">3D Experience</span>
          </h2>
          <p className="reservation__body">
            Walk-ins are welcome, but a reservation guarantees you the best seat, 
            the freshest patty, and the full 3D-Burger experience.
          </p>

          <div className="reservation__details">
            <div className="reservation__detail-block">
              <div className="reservation__detail-label">Mon – Thu</div>
              <div className="reservation__detail-value">12:00 PM – 10:00 PM</div>
            </div>
            <div className="reservation__detail-block">
              <div className="reservation__detail-label">Fri – Sun</div>
              <div className="reservation__detail-value">11:00 AM – 11:30 PM</div>
            </div>
            <div className="reservation__detail-block">
              <div className="reservation__detail-label">Location</div>
              <div className="reservation__detail-value">42, The Grill Quarter, MG Road, Mumbai</div>
            </div>
            <div className="reservation__detail-block">
              <div className="reservation__detail-label">Reservations</div>
              <div className="reservation__detail-value">+91 98765 43210</div>
            </div>
          </div>

          {/* Ambience perks */}
          <div className="reservation__perks">
            {['Private Booth Available','Live Grill Viewing Counter','Event Table Bookings','Chef\'s Counter (6 seats)'].map(p => (
              <div key={p} className="reservation__perk">
                <span className="reservation__perk-dot">◆</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reservation__form-wrap">
          {submitted ? (
            <div className="reservation__success">
              <div className="reservation__success-icon">✓</div>
              <h3>Reservation Received!</h3>
              <p>We'll confirm your table at <strong>{form.email}</strong> within 2 hours.</p>
            </div>
          ) : (
            <form id="reservation-form" className="reservation__form" onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="res-name">Full Name</label>
                  <input id="res-name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form__group">
                  <label htmlFor="res-phone">Phone</label>
                  <input id="res-phone" name="phone" type="tel" placeholder="+91 00000 00000" required value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="res-email">Email Address</label>
                <input id="res-email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="res-date">Date</label>
                  <input id="res-date" name="date" type="date" required value={form.date} onChange={handleChange} />
                </div>
                <div className="form__group">
                  <label htmlFor="res-guests">Guests</label>
                  <select id="res-guests" name="guests" value={form.guests} onChange={handleChange}>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
              </div>

              {/* Time slots */}
              <div className="form__group">
                <label>Preferred Time</label>
                <div className="form__time-grid">
                  {timeSlots.map(slot => (
                    <button
                      type="button"
                      key={slot}
                      id={`time-${slot.replace(/[: ]/g,'-')}`}
                      className={`form__time-btn ${form.time === slot ? 'form__time-btn--active' : ''}`}
                      onClick={() => setForm(f => ({ ...f, time: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="res-note">Special Requests <span className="form__optional">(optional)</span></label>
                <textarea id="res-note" name="note" placeholder="Dietary requirements, occasion, seating preference…" rows="3" value={form.note} onChange={handleChange} />
              </div>

              <button id="reservation-submit" type="submit" className="form__submit">
                Confirm Reservation →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
