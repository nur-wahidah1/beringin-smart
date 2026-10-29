import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonIcon,
} from '@ionic/react';
import {
  mailOutline,
  lockClosedOutline,
  arrowForwardOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import api from '../services/api';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/home';
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Harap isi alamat email dan kata sandi Anda!');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.user.role);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/home';
      } else {
        setErrorMessage('Format respon autentikasi tidak valid.');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setErrorMessage('Kombinasi email atau kata sandi tidak cocok!');
      } else {
        setErrorMessage('Gagal terhubung ke server backend.');
      }
    } finally {
      setLoading(false);
    }
  };

  const setPresetUser = (targetEmail: string) => {
    setEmail(targetEmail);
    setPassword('password123');
    setErrorMessage('');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="sapphire-login-content">
        <div className="login-ambient-glow" />

        <div className="login-wrapper">
          {/* Header Brand dengan Logo Resmi SMKN 1 Beringin */}
          <div className="login-brand-header">
            <div className="school-emblem-box">
              <img
                src="/logo-smkn1beringin.png"
                alt="Logo SMKN 1 Beringin"
                className="school-emblem-img"
              />
            </div>
            
            <h1 className="brand-main-title">
              Beringin Smart
            </h1>
            
            <div className="collaborative-badge">
              <span className="badge-tag">KOLABORASI PENGEMBANG SISWA</span>
              <div className="badge-names">
                <span className="student-name">🎓 Dhiaurrahman</span>
                <span className="student-divider">&</span>
                <span className="student-name">🎓 Nur Wahidah</span>
              </div>
              <span className="badge-school">SMK Negeri 1 Beringin • XI PPLG 1</span>
            </div>
          </div>

          {/* Login Card Midnight Sapphire */}
          <IonCard className="sapphire-card">
            <IonCardContent className="sapphire-card-content">
              <div className="card-header-section">
                <h2 className="card-title">
                  Portal Autentikasi
                </h2>
                <p className="card-subtitle">
                  Sistem Informasi & Manajemen Pengaduan Sarana Prasarana
                </p>
              </div>

              {/* Quick Fill Pills */}
              <div className="quick-access-box">
                <span className="quick-access-title">
                  PILIH AKUN PENGUJIAN:
                </span>
                <div className="quick-access-grid">
                  <button
                    type="button"
                    onClick={() => setPresetUser('dhiaurrahman@beringin.sch.id')}
                    className="preset-btn preset-dhia"
                  >
                    👤 Dhiaurrahman (Siswa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('nurwahidah@beringin.sch.id')}
                    className="preset-btn preset-wahidah"
                  >
                    👤 Nur Wahidah (Siswa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('petugas@beringin.sch.id')}
                    className="preset-btn preset-petugas"
                  >
                    🛠️ Pak Hendra (Petugas)
                  </button>
                </div>
              </div>

              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <label className="form-label">
                    Alamat Email Terdaftar
                  </label>
                  <div className="input-group-box">
                    <IonIcon icon={mailOutline} className="input-icon" />
                    <IonInput
                      type="email"
                      value={email}
                      onIonInput={(e) => setEmail(e.detail.value!)}
                      placeholder="dhiaurrahman@beringin.sch.id"
                      required
                      className="custom-ion-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Kata Sandi Keamanan
                  </label>
                  <div className="input-group-box">
                    <IonIcon icon={lockClosedOutline} className="input-icon" />
                    <IonInput
                      type="password"
                      value={password}
                      onIonInput={(e) => setPassword(e.detail.value!)}
                      placeholder="••••••••"
                      required
                      className="custom-ion-input"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="login-error-alert">
                    <span>⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <IonButton
                  expand="block"
                  type="submit"
                  disabled={loading}
                  className="login-action-btn"
                >
                  {loading ? (
                    <IonSpinner name="crescent" color="light" />
                  ) : (
                    <>
                      <span>Masuk ke Sistem</span>
                      <IonIcon icon={arrowForwardOutline} slot="end" />
                    </>
                  )}
                </IonButton>
              </form>

              <div className="card-security-footer">
                <IonIcon icon={shieldCheckmarkOutline} className="security-icon" />
                <span>Terotentikasi & Diamankan oleh SMKN 1 Beringin</span>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
