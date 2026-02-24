document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    const id=a.getAttribute('href'); if(!id||id==='#') return;
    const el=document.querySelector(id); if(!el) return;
    e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
const modal=document.getElementById('lightbox');
const modalImg=document.getElementById('lightboxImg');
const modalTitle=document.getElementById('lightboxTitle');
const closeBtn=document.getElementById('lightboxClose');
function openLightbox(src,title){
  modalImg.src=src; modalTitle.textContent=title||'Foto';
  modal.classList.add('open'); document.body.style.overflow='hidden';
}
function closeLightbox(){
  modal.classList.remove('open'); modalImg.src=''; document.body.style.overflow='';
}
document.querySelectorAll('[data-lightbox="true"]').forEach(tile=>{
  tile.addEventListener('click',()=>{
    const img=tile.querySelector('img');
    openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
  });
  tile.addEventListener('keydown',(e)=>{ if(e.key==='Enter'||e.key===' ') tile.click(); });
});
closeBtn?.addEventListener('click',closeLightbox);
modal?.addEventListener('click',(e)=>{ if(e.target===modal) closeLightbox(); });
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeLightbox(); });
