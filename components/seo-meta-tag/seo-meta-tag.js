// Define the SEOMetaTags class extending HTMLElement
class SEOMetaTags extends HTMLElement {
    constructor() {
        super();
        // Initialize the shadow DOM
        this.attachShadow({ mode: 'open' });
        // Initialize title and description attributes
        this.title = '';
        this.description = '';
    }

    // Callback triggered when the element is added to the DOM
    connectedCallback() {
        // Update meta tags when connected to the DOM
        this.updateMetaTags();
    }

    // Update meta tags based on attributes
    updateMetaTags() {
        // Set document title based on 'title' attribute or use default
        document.title = this.title || 'Default Title';
        
        // Construct meta tags HTML based on 'description' attribute or use default
        const metaTags = `
            <meta name="description" content="${this.description || 'Default Description'}">
        `;

        // Remove existing meta tags with name 'description'
        const existingMetaTags = this.shadowRoot.querySelectorAll('meta[name="description"]');
        existingMetaTags.forEach(tag => tag.remove());

        // Append new meta tags to the shadow DOM
        const metaTagsContainer = document.createElement('div');
        metaTagsContainer.innerHTML = metaTags;
        this.shadowRoot.appendChild(metaTagsContainer);
    }

    // Define which attributes to observe for changes
    static get observedAttributes() {
        return ['title', 'description'];
    }

    // Callback triggered when observed attributes change
    attributeChangedCallback(name, oldValue, newValue) {
        // If attribute value changed, update corresponding attribute and meta tags
        if (oldValue !== newValue) {
            if (name === 'title') {
                this.title = newValue;
            } else if (name === 'description') {
                this.description = newValue;
            }
            this.updateMetaTags();
        }
    }
}

// Define the custom element 'seo-meta-tags' and associate it with the SEOMetaTags class
customElements.define('seo-meta-tags', SEOMetaTags);
