import { api } from '../lib/api';
import { UserDashboardData } from '../lib/types';

// Avatar default jika user belum upload foto
const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231E3A5F'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%2364B5F6'/%3E%3Cellipse cx='50' cy='90' rx='30' ry='22' fill='%2364B5F6'/%3E%3C/svg%3E";

// Data dashboard disimpan di module level agar bisa diakses fungsi lain
let cachedDashboardData: UserDashboardData | null = null;

// ===================================================================
// FUNGSI UTAMA: Populate Halaman Profil dari data localStorage + cache
// Dipanggil setiap kali navigasi ke halaman Profil
// ===================================================================
export function populateProfilePage() {
  const userRaw = localStorage.getItem('user');
  if (!userRaw) return;
  
  const user = JSON.parse(userRaw);

  // --- Elemen di halaman Profil ---
  const pfName     = document.getElementById("profile-page-name");
  const pfRole     = document.getElementById("profile-page-role");
  const pfImg      = document.getElementById("profile-page-img") as HTMLImageElement;
  const pfEmail    = document.getElementById("pf-email");
  const pfLocation = document.getElementById("pf-location");
  const pfSubs     = document.getElementById("pf-subs-tier");
  const pfCvCount  = document.getElementById("pf-cv-count");
  const pfPortCount= document.getElementById("pf-portfolio-count");

  if (pfName)     pfName.textContent     = user.name || "Pengguna";
  if (pfRole)     pfRole.textContent     = user.role || "Member JagoCV";
  if (pfEmail)    pfEmail.textContent    = user.email || "-";
  if (pfLocation) pfLocation.textContent = user.location || "-";
  if (pfSubs)     pfSubs.textContent     = user.subscriptionTier || "Biasa";
  
  if (pfImg) {
    pfImg.src = user.profileImageUrl || DEFAULT_AVATAR;
    pfImg.onerror = () => { pfImg.src = DEFAULT_AVATAR; };
  }

  // Hitung dokumen dari cache (jika sudah pernah load)
  if (cachedDashboardData) {
    const cvCount   = cachedDashboardData.recentDocs.filter(d => d.type === 'ATS CV' || d.type === 'Visual Resume').length;
    const portCount = cachedDashboardData.recentDocs.filter(d => d.type === 'Web Portfolio').length;
    if (pfCvCount)   pfCvCount.textContent   = cvCount.toString();
    if (pfPortCount) pfPortCount.textContent = portCount.toString();
  }
}

// ===================================================================
// INISIALISASI DASHBOARD
// ===================================================================
export function initDashboard() {
  const dashboardContainer = document.getElementById("view-dashboard");
  if (!dashboardContainer) return;

  async function refreshDashboardData() {
    try {
      const userRaw = localStorage.getItem('user');
      if (!userRaw) return;
      const user = JSON.parse(userRaw);

      let documents: any[] = [];
      try {
        documents = await api.getDocuments();
      } catch (apiErr) {
        console.warn("Gagal mengambil dokumen:", apiErr);
      }

      const dashboardData: UserDashboardData = {
        name: user.name || "Pengguna",
        role: user.role || "Member JagoCV",
        profileImageUrl: user.profileImageUrl || DEFAULT_AVATAR,
        portfolioViews: user.portfolioViews || 0,
        recentDocs: documents.map((doc: any) => ({
          id: doc.id,
          title: doc.title,
          type: doc.type,
          status: doc.status,
          date: doc.date,
          templateId: doc.templateId || 'standard',
          fontFamily: doc.fontFamily || 'Inter',
          themeColor: doc.themeColor || 'blue',
        }))
      };

      cachedDashboardData = dashboardData;
      populateDashboard(dashboardData);

      // Setelah data dimuat, update profil jika halaman profil sedang aktif
      populateProfilePage();

    } catch (err) {
      console.error("Gagal memuat data dashboard:", err);
    }
  }

  // Muat data saat event auth-success (login berhasil) 
  document.addEventListener('auth-success', refreshDashboardData);

  // Muat data jika sudah ada session aktif
  if (localStorage.getItem('token')) {
    refreshDashboardData();
  }
}

// ===================================================================
// POPULASI UI DASHBOARD (navbar + grid dokumen)
// ===================================================================
function populateDashboard(data: UserDashboardData) {
  // --- Navbar ---
  const elName = document.getElementById("nav-user-name");
  const elRole = document.getElementById("nav-user-role");
  const elImg  = document.getElementById("nav-profile-img") as HTMLImageElement;

  if (elName) elName.textContent = data.name;
  if (elRole) elRole.textContent = data.role;
  if (elImg) {
    elImg.src = data.profileImageUrl;
    elImg.onerror = () => { elImg.src = DEFAULT_AVATAR; };
  }

  const viewsEl = document.getElementById("lbl-portfolio-views");
  if (viewsEl) viewsEl.textContent = data.portfolioViews.toString();

  // --- Grid & List Dokumen ---
  const grid     = document.getElementById("recent-docs-grid");
  const listBody = document.getElementById("recent-docs-list");

  if (!grid || !listBody) return;

  grid.innerHTML = `
    <div id="btn-create-blank" class="group relative bg-[#F8FAFC]/80 dark:bg-[#0a0f1c]/50 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
      <div class="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </div>
      <span class="text-sm font-bold text-slate-700 dark:text-slate-300">Buat Kosong</span>
    </div>
  `;
  listBody.innerHTML = "";

  if (data.recentDocs.length === 0) {
    grid.innerHTML += `
      <div class="col-span-full text-center py-12 text-slate-400">
        <svg class="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <p class="font-semibold text-slate-500">Belum ada dokumen</p>
        <p class="text-sm mt-1">Mulai buat CV, Resume, atau Portfolio pertama Anda</p>
      </div>
    `;
    return;
  }

  data.recentDocs.forEach(doc => {
    let typeLabel = "Dokumen";
    if (doc.type === "ATS CV") typeLabel = "ATS CV";
    if (doc.type === "Visual Resume") typeLabel = "Resume";
    if (doc.type === "Web Portfolio") typeLabel = "Web Portfolio";

    const div = document.createElement("div");
    div.className = "group relative bg-white dark:bg-[#0B1221]/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden aspect-[3/4] flex flex-col";
    div.setAttribute('data-doc-id', doc.id);
    div.setAttribute('data-template', doc.templateId || 'standard');
    div.setAttribute('data-font', doc.fontFamily || 'Inter');
    div.innerHTML = `
      <div class="flex-1 bg-slate-50 dark:bg-[#070B19] p-4 relative overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-slate-800/30 transition-colors">
        <div class="w-full h-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded px-3 py-4 flex flex-col gap-2 opacity-80 pointer-events-none">
           ${doc.type === 'Web Portfolio' ? '<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 mb-2"></div>' : ''}
           <div class="w-1/2 h-2 ${doc.type === 'Web Portfolio' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-300 dark:bg-slate-600'} rounded-full ${doc.type !== 'Web Portfolio' ? 'mx-auto' : ''}"></div>
           ${doc.type !== 'Web Portfolio' ? '<div class="w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2"></div>' : ''}
           <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
           <div class="w-[90%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
           <div class="w-[80%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
           ${doc.type !== 'Web Portfolio' ? `
           <div class="mt-4 w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
           <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1"></div>
           <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
           ` : ''}
        </div>
        <button class="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:text-blue-600 backdrop-blur-sm z-10">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>
      <div class="p-3 bg-white dark:bg-[#0B1221] border-t border-slate-100 dark:border-slate-800/80 shrink-0">
        <h3 class="text-sm font-bold text-slate-800 dark:text-white truncate">${doc.title}</h3>
        <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center justify-between">
          <span>${typeLabel}</span>
          <span>${doc.date}</span>
        </p>
      </div>
    `;
    grid.appendChild(div);

    let badgeColor = "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
    if (doc.status === "Selesai")     badgeColor = "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
    if (doc.status === "Diterbitkan") badgeColor = "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
    if (doc.status === "Draf")        badgeColor = "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";

    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer";
    tr.innerHTML = `
      <td class="py-4 px-8">
        <p class="font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${doc.title}</p>
        <p class="text-xs text-slate-500 mt-1 font-medium">${typeLabel}</p>
      </td>
      <td class="py-4 px-8">
        <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">${doc.fontFamily || 'Inter'}</span>
      </td>
      <td class="py-4 px-8">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}">${doc.status}</span>
      </td>
      <td class="py-4 px-8 text-sm text-slate-600 dark:text-slate-400 font-medium">${doc.date}</td>
      <td class="py-4 px-8 text-right">
        <button class="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm">Edit</button>
      </td>
    `;
    listBody.appendChild(tr);
  });

  // --- Toggle Grid/List View ---
  const btnGrid      = document.getElementById("btn-view-grid");
  const btnList      = document.getElementById("btn-view-list");
  const gridContainer= document.getElementById("recent-docs-grid");
  const listContainer= document.getElementById("recent-docs-list-container");

  if (btnGrid && btnList && gridContainer && listContainer) {
    // Hapus event listener lama sebelum menambahkan yang baru
    const newBtnGrid = btnGrid.cloneNode(true) as HTMLElement;
    const newBtnList = btnList.cloneNode(true) as HTMLElement;
    btnGrid.parentNode?.replaceChild(newBtnGrid, btnGrid);
    btnList.parentNode?.replaceChild(newBtnList, btnList);

    newBtnGrid.addEventListener("click", () => {
      gridContainer.classList.remove("hidden");
      listContainer.classList.add("hidden");
      newBtnGrid.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
      newBtnList.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
    });

    newBtnList.addEventListener("click", () => {
      listContainer.classList.remove("hidden");
      gridContainer.classList.add("hidden");
      newBtnList.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
      newBtnGrid.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
    });
  }
}
