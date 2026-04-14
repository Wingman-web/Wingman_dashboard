
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

const CORRECT_PIN = '7744'
const DEMO_EMAIL = 'demo@wingman.com'
const DEMO_PASSWORD = 'wingman_demo_123'

export default function LoginPage() {
    const [pin, setPin] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        if (pin !== CORRECT_PIN) {
            setError('Incorrect PIN')
            setLoading(false)
            return
        }

        const { error } = await supabase.auth.signInWithPassword({
            email: DEMO_EMAIL,
            password: DEMO_PASSWORD,
        })
        if (error) {
            setError(error.message)
        } else {
            router.refresh()
            router.push('/')
        }
        setLoading(false)
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Wingman Dashboard Login</CardTitle>
                    <CardDescription>Enter your PIN to access the platform</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="pin">PIN</Label>
                            <Input
                                id="pin"
                                type="password"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={4}
                                placeholder="Enter 4-digit PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                                required
                                autoFocus
                            />
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button type="submit" className="w-full" disabled={loading || pin.length !== 4}>
                            {loading ? 'Logging in...' : 'Log in'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
