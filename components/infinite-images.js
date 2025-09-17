"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, useCallback } from "react";
import SquareLoader from "@/components/square-loader";

const ASPECT_RATIOS = [
    [9, 16],   // Portrait
    [16, 9],   // Landscape
    [1, 1],    // Square
    [3, 2],    // Landscape
    [2, 3],    // Portrait
    [4, 5],    // Portrait
    [5, 4],    // Landscape
];
const IMAGES_PER_LOAD = 10;

function getRandomImageData() {
    const [w, h] = ASPECT_RATIOS[Math.floor(Math.random() * ASPECT_RATIOS.length)];
    const width = w * 100;
    const height = h * 100;
    const url = `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100000)}`;
    return { url, width, height };
}

function MasonryGrid({ images }) {
    return (
        <>
            <style>{`
        .masonry-grid {
          column-count: 2;
          column-gap: 1rem;
          margin: 0 auto;
        }
        @media (min-width: 500px) {
          .masonry-grid { column-count: 3; }
        }
        @media (min-width: 800px) {
          .masonry-grid { column-count: 4; }
        }
        @media (min-width: 1100px) {
          .masonry-grid { column-count: 5; }
        }
        @media (min-width: 1400px) {
          .masonry-grid { column-count: 6; }
        }
        @media (min-width: 1700px) {
          .masonry-grid { column-count: 7; }
        }
        @media (min-width: 2000px) {
          .masonry-grid { column-count: 8; }
        }
        @media (min-width: 2300px) {
          .masonry-grid { column-count: 9; }
        }
        @media (min-width: 2600px) {
          .masonry-grid { column-count: 10; }
        }
        .masonry-img {
          width: 100%;
          height: auto;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          display: block;
          break-inside: avoid;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
      `}</style>
            <div className="w-full masonry-grid">
                {images.map((img, i) => (
                    <Image
                        loading="lazy"
                        key={img.url + i}
                        src={img.url}
                        alt="Random"
                        className="masonry-img"
                        width={img.width}
                        height={img.height}
                    />
                ))}
            </div>
        </>
    );
}

export default function InfiniteImages() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef();

    const loadMoreImages = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setImages((prev) => [
                ...prev,
                ...Array.from({ length: IMAGES_PER_LOAD }, getRandomImageData),
            ]);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        loadMoreImages();
    }, []);

    useEffect(() => {
        if (!loaderRef.current) return;
        const observer = new window.IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    loadMoreImages();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [loading, loadMoreImages]);

    return (
        <>
            <MasonryGrid images={images} />
            <div ref={loaderRef} style={{ height: 40 }} />
            {loading && (
                <div className="w-full flex items-center justify-center pt-12 pb-6">
                    <SquareLoader />
                </div>
            )}
        </>
    );
}
