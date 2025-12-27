if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const catalogData = {
        name: 'Каталог товаров',
        items: [
            {
                name: 'Мойки',
                items: [
                    {
                        name: 'Ulgran',
                        items: [
                            { name: 'Smth', items: [] },
                            { name: 'Smth', items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        items: []
                    },
                    {
                        name: 'Handmade',
                        items: [
                            { name: 'Smth', items: [] },
                            { name: 'Smth', items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Glass',
                        items: []
                    }
                ]
            },
            {
                name: 'Фильтры',
                items: [
                    {
                        name: 'Ulgran',
                        items: [
                            { name: 'Smth', items: [] },
                            { name: 'Smth', items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        items: []
                    }
                ]
            }
        ]
    };

    const items = new ListItems(document.getElementById('list-items'), catalogData)
    items.render()
    items.init()

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            // Используем всплытие событий
            this.el.addEventListener('click', (event) => {
                const arrow = event.target.closest('[data-open]');
                if (arrow) {
                    const parent = arrow.closest('[data-parent]');
                    if (parent) {
                        this.toggleItems(parent);
                    }
                }
            });
        }

        this.render = function () {
            this.el.innerHTML = this.renderParent(this.data);
        }

        this.renderParent = function (data) {
            if (data.items && data.items.length > 0) {
                return `
                    <div class="list-item list-item_open" data-parent>
                        <div class="list-item__inner">
                            <img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>
                            <img class="list-item__folder" src="img/folder.png" alt="folder">
                            <span>${data.name}</span>
                        </div>
                        <div class="list-item__items">
                            ${data.items.map(item => this.renderParent(item)).join('')}
                        </div>
                    </div>
                `;
            } else {
                return this.renderChildren(data);
            }
        }

        this.renderChildren = function (data) {
            return `
                <div class="list-item">
                    <div class="list-item__inner">
                        <span class="list-item__arrow"></span>
                        <img class="list-item__folder" src="img/folder.png" alt="folder">
                        <span>${data.name}</span>
                    </div>
                </div>
            `;
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open');
        }
    }
}

