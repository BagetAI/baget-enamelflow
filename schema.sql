-- EnamelFlow Core Schema Definition
-- Vertical SaaS for Independent Dental Practices (1-4 chairs)

-- Clinics table: Stores practice information and critical timezone data for scheduling
CREATE TABLE clinics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    timezone VARCHAR(50) NOT NULL DEFAULT 'America/New_York', -- Essential for US-based logic
    address TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Patients table: HIPAA-compliant storage for patient demographics
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID REFERENCES clinics(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    dob DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Appointments table: The ledger for all dental procedures
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID REFERENCES clinics(id) ON DELETE CASCADE,
    patient_id UUID REFERENCES patients(id) ON DELETE SET NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    treatment_type VARCHAR(100), -- e.g., 'Cleaning', 'Crown', 'Consult'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_appointments_clinic_time ON appointments(clinic_id, start_time);
CREATE INDEX idx_patients_clinic_email ON patients(clinic_id, email);
