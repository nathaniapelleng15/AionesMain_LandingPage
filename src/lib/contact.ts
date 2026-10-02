export interface ContactFormData {
  nama: string;
  instansi: string;
  email: string;
  telepon?: string;
  keperluan: string;
  layanan: string[];
  pesan: string;
}

export async function submitContact(data: ContactFormData): Promise<{ success: boolean }> {
  // TODO: hubungkan ke [ENDPOINT FORM] (misalnya Formspree, EmailJS, atau backend sendiri)
  // Simulasi pengiriman data formulir kontak
  console.log("Contact form submitted:", data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
}
