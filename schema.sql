-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Teams Table
create table teams (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  department text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Profiles Table (Users)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  role text check (role in ('management', 'head', 'employee')) default 'employee',
  team_id uuid references teams(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Clients Table
create table clients (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  industry text,
  status text check (status in ('active', 'inactive', 'prospect')) default 'prospect',
  total_revenue numeric default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Campaigns Table
create table campaigns (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  platform text not null,
  status text check (status in ('active', 'paused', 'completed')) default 'active',
  budget numeric default 0,
  spend numeric default 0,
  roas numeric default 0,
  start_date date,
  end_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Leads Table
create table leads (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  company text,
  email text,
  phone text,
  source text,
  status text check (status in ('new', 'contacted', 'converted', 'lost')) default 'new',
  owner_id uuid references profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tasks Table
create table tasks (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  status text check (status in ('todo', 'in_progress', 'review', 'done')) default 'todo',
  priority text check (priority in ('low', 'medium', 'high', 'urgent')) default 'medium',
  due_date timestamp with time zone,
  assignee_id uuid references profiles(id),
  team_id uuid references teams(id),
  created_by uuid references profiles(id),
  ai_prediction_date timestamp with time zone,
  complexity score numeric, -- 1-10
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profiles enable row level security;
alter table teams enable row level security;
alter table clients enable row level security;
alter table campaigns enable row level security;
alter table leads enable row level security;
alter table tasks enable row level security;

-- Policies (Simplified for initial setup)
-- Management: Full Access
create policy "Management full access" on profiles
  for all using (auth.uid() in (select id from profiles where role = 'management'));

-- Anyone can read their own profile
create policy "Read own profile" on profiles
  for select using (auth.uid() = id);

-- Tasks:
-- Management sees all
-- Team Heads see team tasks
-- Employees see assigned tasks
create policy "Task visibility" on tasks
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'management')
    or
    (exists (select 1 from profiles where id = auth.uid() and role = 'head') and team_id = (select team_id from profiles where id = auth.uid()))
    or
    assignee_id = auth.uid()
  );

-- Insert dummy data for testing (optional but helpful)
