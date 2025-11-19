'use client'

import { useState, useEffect, useCallback } from 'react'
import { getAnalysisByCategory } from '../genlayer/genlayer.js'

export function useCategoryData(category, pageSize = 10) {
  const [records, setRecords] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(0)

  const loadData = useCallback(async (isLoadMore = false) => {
    if (isLoading) return

    setIsLoading(true)
    try {
      const currentStartIndex = isLoadMore ? startIndex : 0
      const result = await getAnalysisByCategory(category, currentStartIndex, pageSize)

      // Transform contract records to frontend format
      const transformedRecords = result.records.map((record, index) => ({
        id: currentStartIndex + index,
        image: record.leaderboard_url || record.original_url || '/placeholder.svg',
        name: record.name || 'Unnamed',
        location: record.location || 'Unknown',
        votes: record.score || 0,
        submittedBy: record.caller_address || 'Anonymous',
        timestamp: new Date().toISOString(),
        description: record.defense || '',
        score: record.score || 0,
        rank: record.rank || (currentStartIndex + index + 1),
        originalUrl: record.original_url,
        leaderboardUrl: record.leaderboard_url,
        analysisUrl: record.analysis_url
      }))

      if (isLoadMore) {
        setRecords(prev => [...prev, ...transformedRecords])
      } else {
        setRecords(transformedRecords)
      }

      setStartIndex(currentStartIndex + result.returned_count)
      setHasMore(result.has_more)
      setTotalCount(result.total_count)
    } catch (error) {
      console.error('Failed to load category data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [category, startIndex, pageSize, isLoading])

  const loadMore = useCallback(() => {
    loadData(true)
  }, [loadData])

  const refresh = useCallback(() => {
    setStartIndex(0)
    loadData(false)
  }, [loadData])

  useEffect(() => {
    refresh()
  }, [category])

  return {
    records,
    hasMore,
    isLoading,
    totalCount,
    loadMore,
    refresh
  }
}