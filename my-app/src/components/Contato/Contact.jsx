import React from "react";
import "./contact.css";

export default function Contato() {
  return (
    <div class="contact-container">
      <div class="contact-title">Contato</div>
      <div class="contact-description">
        Tudo o que você precisar, nos vamos te ajudar!
      </div>
      <div class="contact-block">
        <div class="block-1">
          <div class="address">
            <i class="fas-fa-map-marker-alt"></i>
            <div class="address-details">
              <p>Localização</p>
              <p>Alameda Min. Rocha Azevedo, 72 - Bela Vista, São Paulo - SP, 01410-000</p>
            </div>
          </div>
          <div class="email">
            <i class="fas fa-envelope"></i>
            <div class="email-details">
              <p>Email</p>
              <p>pubPub@example.com</p>
            </div>
          </div>
          <div class="phone">
            <i class="fas fa-phone-alt"></i>
            <div class="phone-details">
              <p>Telefone</p>
              <p>+55 98876 8907</p>
            </div>
          </div>

          <div class="map">
            <iframe
              title="iframe"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.253577735795!2d-46.658642784244854!3d-23.561337354664257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc6f50d24b%3A0x14823bda9de5b194!2sSpot!5e0!3m2!1spt-BR!2sbr!4v1630533155085!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
        <div class="block-2">
          <form action="#">
            <div class="form-row">
              <div class="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" />
              </div>
              <div class="form-group">
                <label htmlFor="email">Seu email</label>
                <input type="email" id="email" />
              </div>
            </div>

            <div class="form-group">
              <label htmlFor="subject">Assunto</label>
              <input type="text" id="subject" />
            </div>
            <div class="form-group">
              <label htmlFor="Message">Mensagem</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div class="btn-container">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}