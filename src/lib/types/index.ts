export type Role = 'management' | 'head' | 'employee';

export interface Profile {
    id: string;
    email: string;
    full_name: string;
    avatar_url?: string;
    role: Role;
    team_id?: string;
    created_at: string;
}

export interface Team {
    id: string;
    name: string;
    department: string;
    created_at: string;
}

export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    due_date?: string;
    assignee_id?: string;
    team_id?: string;
    created_by: string;
    ai_prediction_date?: string;
    complexity?: number;
    created_at: string;
}

export interface Client {
    id: string;
    name: string;
    industry?: string;
    status: 'active' | 'inactive' | 'prospect';
    total_revenue: number;
    created_at: string;
}

export interface Campaign {
    id: string;
    name: string;
    platform: string;
    status: 'active' | 'paused' | 'completed';
    budget: number;
    spend: number;
    roas: number;
    start_date?: string;
    end_date?: string;
    created_at: string;
}

export interface Lead {
    id: string;
    name: string;
    company?: string;
    email?: string;
    phone?: string;
    source?: string;
    status: 'new' | 'contacted' | 'converted' | 'lost';
    owner_id?: string;
    created_at: string;
}
