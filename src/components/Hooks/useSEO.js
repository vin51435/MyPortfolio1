import { useEffect } from "react";

export default function useSEO({ title, description, keywords, ogTitle, ogDescription }) {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    // Helper to update or create a meta tag
    const updateMetaTag = (selectorAttribute, attributeValue, content, isProperty = false) => {
      if (content === undefined || content === null) return;
      const selector = `meta[${selectorAttribute}="${attributeValue}"]`;
      let metaEl = document.querySelector(selector);
      if (!metaEl) {
        metaEl = document.createElement("meta");
        metaEl.setAttribute(selectorAttribute, attributeValue);
        document.head.appendChild(metaEl);
      }
      metaEl.setAttribute("content", content);
    };

    // 2. Update standard description meta tag
    updateMetaTag("name", "description", description);

    // 3. Update standard keywords meta tag
    updateMetaTag("name", "keywords", keywords);

    // 4. Update Schema.org ItemProp tags (Google)
    updateMetaTag("itemprop", "name", title);
    updateMetaTag("itemprop", "description", description);

    // 5. Update Open Graph Meta Tags (Facebook)
    updateMetaTag("property", "og:title", ogTitle || title, true);
    updateMetaTag("property", "og:description", ogDescription || description, true);

    // 6. Update Twitter Meta Tags
    updateMetaTag("name", "twitter:title", ogTitle || title);
    updateMetaTag("name", "twitter:description", ogDescription || description);

  }, [title, description, keywords, ogTitle, ogDescription]);
}
