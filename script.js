// ---------- Chuyển trang (SPA đơn giản, không reload) ----------
const titles = {dashboard:'Dashboard', products:'Quản lý sản phẩm', categories:'Quản lý danh mục', orders:'Quản lý đơn hàng', customers:'Quản lý khách hàng', stats:'Thống kê'};

document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const page = item.dataset.page;
    goto(page);
  });
});

document.querySelectorAll('[data-goto]').forEach(el=>{
  el.addEventListener('click', ()=> goto(el.dataset.goto));
});

function goto(page){
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===page));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id==='page-'+page));
  document.getElementById('pageTitle').textContent = titles[page] || 'Dashboard';
  document.getElementById('sidebar').classList.remove('open');
}

// ---------- Sidebar mobile toggle ----------
document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
});

// ---------- Modal ----------
function openModal(id){ document.getElementById(id).classList.add('show'); }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }

document.querySelectorAll('.overlay').forEach(ov=>{
  ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('show'); });
});

// ---------- Biểu đồ cột thuần CSS ----------
function renderBars(containerId, data){
  const el = document.getElementById(containerId);
  const max = Math.max(...data.map(d=>d.v));
  el.innerHTML = data.map(d=>`
    <div class="bar-col">
      <div class="bar" style="height:${(d.v/max*100)}%"></div>
      <div class="bar-label">${d.l}</div>
    </div>`).join('');
}

renderBars('revenueChart', [
  {l:'T2', v:2.1},{l:'T3', v:3.4},{l:'T4', v:2.8},{l:'T5', v:4.6},{l:'T6', v:3.9},{l:'T7', v:5.2},{l:'CN', v:4.25}
]);

renderBars('statsChart', [
  {l:'T3', v:52},{l:'T4', v:61},{l:'T5', v:58},{l:'T6', v:74},{l:'T7', v:69},{l:'T8', v:86}
]);
