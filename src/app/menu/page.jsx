"use client"
import { useEffect, useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function page() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState(null)

  const itemsPerPage = 8

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/products`)

        if (!res.ok) {
          setError("Failed to load products")
          return
        }
        const data = await res.json()
        console.log(data.products)
        setItems(Array.isArray(data) ? data : data.products || [])
        setCurrentPage(1)
      } catch (e) {
        setError("Failed to load products. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 4

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("ellipsis")

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (!pages.includes(i)) pages.push(i)
      }

      if (currentPage < totalPages - 2) pages.push("ellipsis")
      pages.push(totalPages)
    }
    return pages
  }

  if (loading) {
    return (
      <>
      <div className="min-h-screen bg-background">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-6 w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
         </>
    )
 
  }

  if (error) {
    return (
      
      <div className="flex min-h-screen items-center justify-center px-4 bg-background">
        <div className="text-center">
          <p className="text-destructive text-lg font-medium">{error}</p>
          <p className="text-muted-foreground mt-2">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
       <>
       <Navbar/>
    <div className="min-h-screen bg-background">
      <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-tight">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        {/* Products Grid */}
        {items.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="text-center">
              <p className="text-base text-muted-foreground mb-2">No items available</p>
              <p className="text-sm text-muted-foreground">Visit Admin to add products.</p>
            </div>
          </div>
        ) : (
          <div className="mb-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((p) => (
                <div
                  key={p.id}
                  className="group flex flex-col h-full bg-card shadow-2xl rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20   transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-56 bg-muted overflow-hidden">
                    <img
                      src={p?.image_url ? p.image_url : "/assets/placeholder.png"}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-5 flex flex-col">
                    <h3 className="font-bold text-lg text-foreground leading-snug truncate group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{p.description}</p>

                    {/* Price Section */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-2xl font-bold text-primary">₹{p.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={`${
                      currentPage === 1
                        ? "pointer-events-none opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-muted"
                    }`}
                  />
                </PaginationItem>

                {getPageNumbers().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === "ellipsis" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className={`${
                          currentPage === page ? "bg-primary text-primary-foreground" : "hover:bg-muted cursor-pointer"
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className={`${
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-muted"
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <br></br>
                    
                      
          </div>
                )}

            < div className="text-center  text-sm lg:text-xl  text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(endIndex, items.length)} of {items.length} items
            </div>
        
      </div>
    </div>
    <Footer/>
       </>
  )
}
