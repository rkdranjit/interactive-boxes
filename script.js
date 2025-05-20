document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', function (e) {
    // Don't reset content if already expanded (allows dropdowns to be clicked)
    if (this.classList.contains('expanded') && e.target.tagName === 'SELECT') {
      return;
    }

    document.querySelectorAll('.box').forEach((b) => {
      b.classList.remove('expanded');
      b.innerHTML = `<p>${b.id}</p>`;
    });

    this.classList.add('expanded');
    this.innerHTML = `
      <p style="font-weight:bold; margin-bottom: 10px;">${this.id}</p>
      <div class="ribbon">MOST POPULAR</div>
      <div class="selectors">
        <div class="row">
          <label>#1</label>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <select>
            <option>Color</option>
            <option>White</option>
            <option>Red</option>
          </select>
        </div>
        <div class="row">
          <label>#2</label>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <select>
            <option>Colour</option>
            <option>Black</option>
            <option>Pink</option>
          </select>
        </div>
      </div>
    `;
  });
});
