import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal.tsx";
import { CtaButton } from "./CtaButton.tsx";
import { SERVICE_URLS, CONTACT_INFO } from "../data/content.ts";
import { submitContact, ContactFormData } from "../lib/contact.ts";

export const Contact: React.FC = () => {
  const [nama, setNama] = useState("");
  const [instansi, setInstansi] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [keperluan, setKeperluan] = useState("Jadwalkan demo");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [pesan, setPesan] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen to custom event or URL hash to set "keperluan"
  useEffect(() => {
    const handleSetReason = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setKeperluan(customEvent.detail);
      }
    };

    window.addEventListener("set-contact-reason", handleSetReason);

    // Check hash on mount/change
    const handleHash = () => {
      if (window.location.hash === "#demo" || window.location.hash === "#contact" || window.location.hash === "#kontak") {
        if (window.location.hash === "#demo") {
          setKeperluan("Jadwalkan demo");
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("set-contact-reason", handleSetReason);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi.";
    }

    if (!instansi.trim()) {
      newErrors.instansi = "Instansi / BUMD wajib diisi.";
    }

    if (!email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid (contoh: nama@domain.com).";
    }

    if (!keperluan) {
      newErrors.keperluan = "Keperluan wajib dipilih.";
    }

    if (!pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formData: ContactFormData = {
      nama,
      instansi,
      email,
      telepon,
      keperluan,
      layanan: selectedServices,
      pesan,
    };

    try {
      await submitContact(formData);
      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: "Gagal mengirim pesan. Silakan coba lagi." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setNama("");
    setInstansi("");
    setEmail("");
    setTelepon("");
    setKeperluan("Jadwalkan demo");
    setSelectedServices([]);
    setPesan("");
    setErrors({});
    setIsSuccess(false);
  };

  const servicesList = [
    { id: "care", label: "AionesCare", activeBg: "bg-[#0f766e]" },
    { id: "content", label: "AionesContent", activeBg: "bg-[#017cc3]" },
    { id: "docu", label: "AionesDocu", activeBg: "bg-[#017cc3]" },
    { id: "board", label: "AionesBoard", activeBg: "bg-[#017cc3]" },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 pt-[64px] pb-[56px] bg-white border-t border-[#e6e3f1] relative"
      aria-labelledby="contact-heading"
    >
      {/* Alias anchor for #kontak */}
      <div id="kontak" className="absolute -top-20 left-0" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Header - Centered */}
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto mb-7">
            <h2
              id="contact-heading"
              className="text-[28px] md:text-[30px] font-bold text-[#2a1570] leading-[1.15] tracking-[-0.02em] mb-3"
            >
              Mari bicarakan kebutuhan unit Anda.
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#4a4566] leading-[1.6]">
              Isi formulir di bawah, tim AIONES akan menghubungi Anda untuk
              menjadwalkan demo atau menjawab pertanyaan seputar layanan.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-12 gap-5 items-stretch w-full">
          {/* LEFT COLUMN — Contact Info Card (5 cols) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col h-full">
            <Reveal delay={100} className="w-full flex flex-col h-full flex-1">
              <div className="relative rounded-[22px] bg-gradient-to-br from-[#1d0f50] via-[#2a1570] to-[#017cc3] text-white p-7 md:p-[28px] overflow-hidden shadow-apple-card border border-white/10 w-full flex-1 flex flex-col justify-between h-full">
                {/* Soft Aurora in Top Right */}
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#017cc3]/35 blur-[50px] pointer-events-none select-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                  {/* Top Part: Title and Contact Items */}
                  <div>
                    <h3 className="text-[18px] font-bold text-white mb-5 tracking-tight">
                      Hubungi kami langsung
                    </h3>

                    <div className="space-y-3.5">
                      {/* Email */}
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="group flex items-start gap-3.5 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-[14px]"
                      >
                        <div className="w-[34px] h-[34px] rounded-full bg-white/12 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                          <Mail className="w-4 h-4 text-[#dbffff]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-0.5">Email</div>
                          <div className="text-[14px] font-semibold text-white group-hover:text-[#dbffff] transition-colors leading-tight">
                            {CONTACT_INFO.email}
                          </div>
                        </div>
                      </a>

                      {/* Phone / WA */}
                      <a
                        href={CONTACT_INFO.waUrl}
                        className="group flex items-start gap-3.5 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-[14px]"
                      >
                        <div className="w-[34px] h-[34px] rounded-full bg-white/12 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                          <Phone className="w-4 h-4 text-[#dbffff]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-0.5">Telepon / WhatsApp</div>
                          <div className="text-[14px] font-semibold text-white group-hover:text-[#dbffff] transition-colors leading-tight">
                            {CONTACT_INFO.phone}
                          </div>
                        </div>
                      </a>

                      {/* Address */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-[34px] h-[34px] rounded-full bg-white/12 border border-white/15 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[#dbffff]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-0.5">Alamat</div>
                          <div className="text-[14px] font-semibold text-white leading-tight">
                            {CONTACT_INFO.address}
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-[34px] h-[34px] rounded-full bg-white/12 border border-white/15 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-[#dbffff]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-0.5">Jam Layanan</div>
                          <div className="text-[14px] font-semibold text-white leading-tight">
                            {CONTACT_INFO.hours}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Part: Service Chips */}
                  <div className="pt-4 mt-6 border-t border-white/15">
                    <div className="text-[11px] text-white/60 font-bold uppercase tracking-wider mb-2">
                      LAYANAN AIONES
                    </div>
                    <div className="flex flex-wrap items-center gap-[6px] max-[640px]:max-h-none">
                      <a
                        href={SERVICE_URLS.care}
                        className="inline-flex items-center gap-1 h-[28px] px-3 rounded-full bg-white/10 hover:bg-white/20 border border-[#89f5e7]/30 text-[#89f5e7] text-[12px] font-semibold transition-colors group"
                      >
                        <span>AionesCare</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} aria-hidden="true" />
                      </a>
                      <a
                        href={SERVICE_URLS.content}
                        className="inline-flex items-center gap-1 h-[28px] px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#dbffff] text-[12px] font-semibold transition-colors group"
                      >
                        <span>AionesContent</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} aria-hidden="true" />
                      </a>
                      <a
                        href={SERVICE_URLS.docu}
                        className="inline-flex items-center gap-1 h-[28px] px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#dbffff] text-[12px] font-semibold transition-colors group"
                      >
                        <span>AionesDocu</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} aria-hidden="true" />
                      </a>
                      <a
                        href={SERVICE_URLS.board}
                        className="inline-flex items-center gap-1 h-[28px] px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#dbffff] text-[12px] font-semibold transition-colors group"
                      >
                        <span>AionesBoard</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.75} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN — Form / Success Card (7 cols) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col h-full">
            <Reveal delay={200} className="w-full flex flex-col h-full flex-1">
              <div className="rounded-[22px] bg-white border border-[#e6e3f1] p-7 md:p-[28px] shadow-[0_12px_32px_rgba(29,15,80,0.08)] w-full flex-1 flex flex-col justify-center">
                {isSuccess ? (
                  /* Success Card */
                  <div
                    role="status"
                    className="py-8 px-4 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-[0.98] duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#2a1570] to-[#017cc3] flex items-center justify-center text-white shadow-md mb-5">
                      <Check className="w-7 h-7" strokeWidth={2.5} aria-hidden="true" />
                    </div>

                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#2a1570] tracking-tight mb-2">
                      Pesan terkirim
                    </h3>

                    <p className="text-[15px] text-[#4a4566] leading-relaxed max-w-[400px] mx-auto mb-6">
                      Terima kasih. Tim AIONES akan menghubungi Anda melalui email atau WhatsApp.
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full bg-[#eef0f7] hover:bg-[#e2e6f3] text-[#2a1570] text-[14px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
                    >
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-[14px] w-full">
                    {/* Row 1: Nama + Instansi (responsive sm:grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Nama */}
                      <div>
                        <label
                          htmlFor="contact-nama"
                          className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                        >
                          Nama lengkap<span className="text-[#c0392b] ml-0.5">*</span>
                        </label>
                        <input
                          id="contact-nama"
                          type="text"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          aria-required="true"
                          aria-invalid={Boolean(errors.nama)}
                          aria-describedby={errors.nama ? "error-nama" : undefined}
                          className={`w-full h-[44px] rounded-[12px] bg-[#eef0f7] px-3.5 text-[14px] text-[#1c1440] border transition-all duration-200 outline-none focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15 ${
                            errors.nama
                              ? "border-[#c0392b] bg-red-50/20"
                              : "border-transparent"
                          }`}
                          placeholder="Masukkan nama Anda"
                        />
                        {errors.nama && (
                          <p id="error-nama" className="text-[13px] text-[#c0392b] mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.nama}</span>
                          </p>
                        )}
                      </div>

                      {/* Instansi */}
                      <div>
                        <label
                          htmlFor="contact-instansi"
                          className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                        >
                          Instansi / BUMD<span className="text-[#c0392b] ml-0.5">*</span>
                        </label>
                        <input
                          id="contact-instansi"
                          type="text"
                          value={instansi}
                          onChange={(e) => setInstansi(e.target.value)}
                          aria-required="true"
                          aria-invalid={Boolean(errors.instansi)}
                          aria-describedby={errors.instansi ? "error-instansi" : undefined}
                          className={`w-full h-[44px] rounded-[12px] bg-[#eef0f7] px-3.5 text-[14px] text-[#1c1440] border transition-all duration-200 outline-none focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15 ${
                            errors.instansi
                              ? "border-[#c0392b] bg-red-50/20"
                              : "border-transparent"
                          }`}
                          placeholder="Nama instansi atau BUMD"
                        />
                        {errors.instansi && (
                          <p id="error-instansi" className="text-[13px] text-[#c0392b] mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.instansi}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email + Telepon (responsive sm:grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                        >
                          Email<span className="text-[#c0392b] ml-0.5">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "error-email" : undefined}
                          className={`w-full h-[44px] rounded-[12px] bg-[#eef0f7] px-3.5 text-[14px] text-[#1c1440] border transition-all duration-200 outline-none focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15 ${
                            errors.email
                              ? "border-[#c0392b] bg-red-50/20"
                              : "border-transparent"
                          }`}
                          placeholder="nama@domain.com"
                        />
                        {errors.email && (
                          <p id="error-email" className="text-[13px] text-[#c0392b] mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Telepon */}
                      <div>
                        <label
                          htmlFor="contact-telepon"
                          className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                        >
                          Nomor telepon / WhatsApp
                        </label>
                        <input
                          id="contact-telepon"
                          type="tel"
                          value={telepon}
                          onChange={(e) => setTelepon(e.target.value)}
                          className="w-full h-[44px] rounded-[12px] bg-[#eef0f7] px-3.5 text-[14px] text-[#1c1440] border border-transparent transition-all duration-200 outline-none focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15"
                          placeholder="081234567890"
                        />
                      </div>
                    </div>

                    {/* Row 3: Keperluan */}
                    <div>
                      <label
                        htmlFor="contact-keperluan"
                        className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                      >
                        Keperluan<span className="text-[#c0392b] ml-0.5">*</span>
                      </label>
                      <select
                        id="contact-keperluan"
                        value={keperluan}
                        onChange={(e) => setKeperluan(e.target.value)}
                        aria-required="true"
                        aria-invalid={Boolean(errors.keperluan)}
                        aria-describedby={errors.keperluan ? "error-keperluan" : undefined}
                        className={`w-full h-[44px] rounded-[12px] bg-[#eef0f7] px-3.5 text-[14px] text-[#1c1440] border transition-all duration-200 outline-none focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15 cursor-pointer ${
                          errors.keperluan
                            ? "border-[#c0392b] bg-red-50/20"
                            : "border-transparent"
                        }`}
                      >
                        <option value="Jadwalkan demo">Jadwalkan demo</option>
                        <option value="Tanya layanan">Tanya layanan</option>
                        <option value="Kerja sama">Kerja sama</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      {errors.keperluan && (
                        <p id="error-keperluan" className="text-[13px] text-[#c0392b] mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.keperluan}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 4: Layanan yang diminati */}
                    <div>
                      <label className="block text-[13px] font-medium text-[#2a1570] mb-1.5">
                        Layanan yang diminati <span className="text-[12px] font-normal text-[#8a84a8]">(opsional)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesList.map((srv) => {
                          const isActive = selectedServices.includes(srv.id);
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              aria-pressed={isActive}
                              onClick={() => toggleService(srv.id)}
                              className={`inline-flex items-center gap-1.5 h-[30px] px-3 rounded-full text-[12px] font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none ${
                                isActive
                                  ? `${srv.activeBg} text-white shadow-xs scale-[1.02]`
                                  : "bg-[#eef0f7] text-[#2a1570] hover:bg-[#e2e6f3]"
                              }`}
                            >
                              {isActive && (
                                <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                              )}
                              <span>{srv.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 5: Pesan */}
                    <div>
                      <label
                        htmlFor="contact-pesan"
                        className="block text-[13px] font-medium text-[#2a1570] mb-1.5"
                      >
                        Pesan<span className="text-[#c0392b] ml-0.5">*</span>
                      </label>
                      <textarea
                        id="contact-pesan"
                        rows={3}
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        aria-required="true"
                        aria-invalid={Boolean(errors.pesan)}
                        aria-describedby={errors.pesan ? "error-pesan" : undefined}
                        className={`w-full rounded-[12px] bg-[#eef0f7] p-3.5 text-[14px] text-[#1c1440] border transition-all duration-200 outline-none resize-y h-[88px] min-h-[88px] focus:bg-white focus:border-[#017cc3] focus:ring-4 focus:ring-[#017cc3]/15 ${
                          errors.pesan
                            ? "border-[#c0392b] bg-red-50/20"
                            : "border-transparent"
                        }`}
                        placeholder="Tuliskan pertanyaan atau kebutuhan spesifik instansi Anda..."
                      />
                      {errors.pesan && (
                        <p id="error-pesan" className="text-[13px] text-[#c0392b] mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.pesan}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Error Global if any */}
                    {errors.form && (
                      <div className="p-3.5 rounded-[12px] bg-red-50 text-[#c0392b] text-[13px] font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errors.form}</span>
                      </div>
                    )}

                    {/* Action Button & Disclaimer SEJAJAR */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full">
                      <CtaButton
                        variant="primary"
                        size="md"
                        type="submit"
                        showArrow={false}
                        className="w-full sm:w-auto h-[44px] min-h-[44px] px-5 text-[14px] shrink-0"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                      </CtaButton>

                      <p className="text-[12px] text-[#8a84a8] leading-tight text-center sm:text-right">
                        Dengan mengirim formulir ini, Anda setuju dihubungi oleh tim AIONES.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
